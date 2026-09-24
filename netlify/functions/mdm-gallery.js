const ALLOWED_ORIGIN = process.env.URL || process.env.DEPLOY_PRIME_URL || '*';

function json(statusCode, body, headers = {}) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=300, stale-while-revalidate=600',
      'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      ...headers,
    },
    body: JSON.stringify(body),
  };
}

function normalizeItems(payload) {
  const findItems = (value, depth = 0) => {
    if (depth > 4 || value == null) return [];
    if (Array.isArray(value)) return value;
    if (typeof value !== 'object') return [];

    for (const key of ['items', 'gallery', 'images', 'posts', 'media', 'photos', 'approvedImages']) {
      if (Array.isArray(value[key])) return value[key];
    }

    for (const key of ['data', 'profile', 'business', 'result']) {
      const nested = findItems(value[key], depth + 1);
      if (nested.length) return nested;
    }
    return [];
  };

  const items = findItems(payload);

  if (!Array.isArray(items)) return [];

  return items
    .map((item) => {
      if (typeof item === 'string') return { imageUrl: item };
      return {
        id: item.id || item._id || item.slug || item.imageUrl || item.url,
        imageUrl: item.imageUrl || item.image_url || item.image || item.photoUrl || item.photo_url || item.url || item.src,
        thumbnailUrl: item.thumbnailUrl || item.thumbnail_url || item.thumbnail || item.previewUrl || item.preview_url || item.imageUrl || item.image_url || item.image || item.url || item.src,
        title: item.title || item.name || item.caption || '',
        sourceUrl: item.sourceUrl || item.source_url || item.permalink || item.link || '',
        alt: item.alt || item.title || item.name || 'EMV Custom Pools project',
      };
    })
    .filter((item) => typeof item.imageUrl === 'string' && /^https?:\/\//i.test(item.imageUrl));
}

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return json(204, '');
  if (event.httpMethod !== 'GET') return json(405, { error: 'Method not allowed' }, { Allow: 'GET, OPTIONS' });

  const apiUrl = process.env.MDM_API_URL;
  const apiKey = process.env.MDM_API_KEY;
  const businessSlug = process.env.MDM_BUSINESS_SLUG;

  if (!apiUrl || !apiKey || !businessSlug) {
    console.error('Missing MDM_API_URL, MDM_API_KEY, or MDM_BUSINESS_SLUG');
    return json(500, { error: 'Gallery service is not configured.' });
  }

  const limit = Math.min(Math.max(Number.parseInt(event.queryStringParameters?.limit || '12', 10) || 12, 1), 50);
  const separator = apiUrl.includes('?') ? '&' : '?';
  const requestUrl = `${apiUrl}${separator}business=${encodeURIComponent(businessSlug)}&businessSlug=${encodeURIComponent(businessSlug)}&limit=${limit}`;

  try {
    const response = await fetch(requestUrl, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
        'X-API-Key': apiKey,
      },
    });

    if (!response.ok) {
      console.error(`MDM gallery request failed: ${response.status}`);
      return json(502, { error: 'Gallery service unavailable.', status: response.status });
    }

    const payload = await response.json();
    return json(200, { items: normalizeItems(payload).slice(0, limit) });
  } catch (error) {
    console.error('MDM gallery request error:', error.message);
    return json(502, { error: 'Gallery service unavailable.' });
  }
};

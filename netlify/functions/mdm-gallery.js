const ALLOWED_ORIGIN = process.env.URL || process.env.DEPLOY_PRIME_URL || "*";
const CORS_HEADERS = {
  "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function json(statusCode, body, headers = {}) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...CORS_HEADERS,
      ...headers,
    },
    body: JSON.stringify(body),
  };
}

function normalizeItems(payload) {
  const findItems = (value, depth = 0) => {
    if (depth > 4 || value == null) return [];
    if (Array.isArray(value)) return value;
    if (typeof value !== "object") return [];

    for (const key of ["items", "gallery", "images", "posts", "media", "photos", "approvedImages"]) {
      if (Array.isArray(value[key])) return value[key];
    }

    for (const key of ["data", "profile", "business", "result"]) {
      const nested = findItems(value[key], depth + 1);
      if (nested.length) return nested;
    }
    return [];
  };

  return findItems(payload)
    .map((item) => {
      if (typeof item === "string") return { imageUrl: item };
      if (!item || typeof item !== "object") return null;

      return {
        id: item.id || item._id || item.slug || item.imageUrl || item.url,
        imageUrl: item.imageUrl || item.image_url || item.image || item.photoUrl || item.photo_url || item.url || item.src,
        thumbnailUrl: item.thumbnailUrl || item.thumbnail_url || item.thumbnail || item.previewUrl || item.preview_url || item.imageUrl || item.image_url || item.image || item.url || item.src,
        title: item.title || item.name || item.caption || "",
        sourceUrl: item.sourceUrl || item.source_url || item.permalink || item.link || "",
        alt: item.alt || item.title || item.name || "EMV Custom Pools project",
      };
    })
    .filter((item) => item && typeof item.imageUrl === "string" && /^https?:\/\//i.test(item.imageUrl));
}

function buildGalleryUrl(configuredApiUrl, businessSlug, limit) {
  let configuredUrl;
  try {
    configuredUrl = new URL(configuredApiUrl);
  } catch {
    throw new Error("MDM_API_URL is not a valid URL");
  }

  const isGalleryEndpoint = /\/api\/v1\/businesses\/[^/]+\/gallery\/?$/i.test(configuredUrl.pathname);
  const galleryUrl = isGalleryEndpoint
    ? configuredUrl
    : new URL(`/api/v1/businesses/${encodeURIComponent(businessSlug)}/gallery`, configuredUrl.origin);

  galleryUrl.searchParams.set("limit", String(limit));
  return galleryUrl;
}

export const handler = async (event) => {
  try {
    if (event.httpMethod === "OPTIONS") {
      return {
        statusCode: 204,
        headers: {
          ...CORS_HEADERS,
          "Cache-Control": "no-store",
        },
        body: "",
      };
    }

    if (event.httpMethod !== "GET") {
      return json(405, { error: "Method not allowed" }, { Allow: "GET, OPTIONS" });
    }

    const apiKey = process.env.MDM_API_KEY;
    const businessSlug = process.env.MDM_BUSINESS_SLUG;
    const configuredApiUrl = process.env.MDM_API_URL;

    if (!apiKey || apiKey === "replace-with-your-mdm-api-key") {
      return json(500, { error: "Missing MDM_API_KEY" });
    }

    if (!businessSlug) {
      return json(500, { error: "Missing MDM_BUSINESS_SLUG" });
    }

    if (!configuredApiUrl) {
      return json(500, { error: "Missing MDM_API_URL" });
    }

    const requestedLimit = Number.parseInt(event.queryStringParameters?.limit || "12", 10);
    const limit = Number.isFinite(requestedLimit)
      ? Math.min(Math.max(requestedLimit, 1), 50)
      : 12;
    const url = buildGalleryUrl(configuredApiUrl, businessSlug, limit);

    console.log("Requesting MDM gallery:", url.toString());

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "X-API-Key": apiKey,
        Accept: "application/json"
      }
    });

    const body = await response.text();

    if (!response.ok) {
      console.error(
        "MDM gallery request failed:",
        response.status,
        body
      );

      const error = response.status === 401 || response.status === 403
        ? "MDM API key rejected or gallery access is not enabled."
        : response.status === 404
          ? "MDM business or gallery endpoint was not found."
          : "MDM gallery request failed";

      return json(502, {
        error,
        upstreamStatus: response.status,
      });
    }

    let payload;
    try {
      payload = body ? JSON.parse(body) : {};
    } catch {
      return json(502, { error: "MDM gallery returned invalid JSON" });
    }

    const items = normalizeItems(payload).slice(0, limit);
    return json(200, { items }, { "Cache-Control": "public, max-age=60" });
  } catch (error) {
    console.error("MDM gallery function error:", error);
    return json(500, {
      error: error.message === "MDM_API_URL is not a valid URL"
        ? error.message
        : "Internal server error",
    });
  }
};

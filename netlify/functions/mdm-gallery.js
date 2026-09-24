function buildGalleryUrl(configuredApiUrl, businessSlug, limit) {
  const configuredUrl = new URL(configuredApiUrl);
  const isGalleryEndpoint = /\/api\/v1\/businesses\/[^/]+\/gallery\/?$/i.test(configuredUrl.pathname);
  const galleryUrl = isGalleryEndpoint
    ? configuredUrl
    : new URL(`/api/v1/businesses/${encodeURIComponent(businessSlug)}/gallery`, configuredUrl.origin);

  galleryUrl.searchParams.set("limit", String(limit));
  return galleryUrl;
}

export const handler = async (event) => {
  try {
    const apiKey = process.env.MDM_API_KEY;
    const businessSlug = process.env.MDM_BUSINESS_SLUG;
    const configuredApiUrl = process.env.MDM_API_URL;

    if (!apiKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Missing MDM_API_KEY"
        })
      };
    }

    if (!businessSlug) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Missing MDM_BUSINESS_SLUG"
        })
      };
    }

    if (!configuredApiUrl) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Missing MDM_API_URL"
        })
      };
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

      return {
        statusCode: 502,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          error: "MDM gallery request failed",
          upstreamStatus: response.status,
          upstreamResponse: body
        })
      };
    }

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=60"
      },
      body
    };
  } catch (error) {
    console.error("MDM gallery function error:", error);

    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        error: "Internal server error",
        message: error.message
      })
    };
  }
};

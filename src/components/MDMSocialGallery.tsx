import { useEffect, useState } from 'react';

type GalleryLayout = 'masonry' | 'grid' | 'carousel' | 'featured-first';

type GalleryItem = {
  id?: string;
  imageUrl: string;
  thumbnailUrl?: string;
  title?: string;
  alt?: string;
  sourceUrl?: string;
};

type GalleryResponse = {
  items?: unknown;
  error?: string;
};

function getGalleryError(status: number, payload: GalleryResponse) {
  if (status === 500 && payload.error?.startsWith('Missing')) return 'Gallery service configuration is incomplete.';
  if (status === 502) return 'The gallery provider is temporarily unavailable.';
  return payload.error || `Gallery request failed (${status}).`;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function normalizeGalleryItems(value: unknown): GalleryItem[] {
  if (!Array.isArray(value)) return [];

  return value.flatMap((item): GalleryItem[] => {
    if (typeof item === 'string') {
      return /^https?:\/\//i.test(item) ? [{ imageUrl: item }] : [];
    }
    if (!isRecord(item)) return [];

    const imageUrl = [item.imageUrl, item.image_url, item.image, item.photoUrl, item.photo_url, item.url, item.src]
      .find((candidate): candidate is string => typeof candidate === 'string' && /^https?:\/\//i.test(candidate));
    if (!imageUrl) return [];

    const thumbnailUrl = [item.thumbnailUrl, item.thumbnail_url, item.thumbnail, item.previewUrl, item.preview_url]
      .find((candidate): candidate is string => typeof candidate === 'string' && /^https?:\/\//i.test(candidate));
    const title = [item.title, item.name, item.caption].find((candidate): candidate is string => typeof candidate === 'string');
    const sourceUrl = [item.sourceUrl, item.source_url, item.permalink, item.link]
      .find((candidate): candidate is string => typeof candidate === 'string' && /^https?:\/\//i.test(candidate));
    const alt = typeof item.alt === 'string' ? item.alt : title;
    const id = [item.id, item._id, item.slug].find((candidate): candidate is string => typeof candidate === 'string');

    return [{ id, imageUrl, thumbnailUrl, title, sourceUrl, alt }];
  });
}

type MDMSocialGalleryProps = {
  limit?: number;
  layout?: GalleryLayout;
  linkToSource?: boolean;
};

export default function MDMSocialGallery({
  limit = 12,
  layout = 'masonry',
  linkToSource = false,
}: MDMSocialGalleryProps) {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function loadGallery() {
      try {
        const response = await fetch(`/.netlify/functions/mdm-gallery?limit=${encodeURIComponent(limit)}`, {
          headers: { Accept: 'application/json' },
          signal: controller.signal,
        });
        const body = await response.text();
        let payload: GalleryResponse = {};
        try {
          payload = body ? (JSON.parse(body) as GalleryResponse) : {};
        } catch {
          throw new Error(`Gallery service returned invalid data (${response.status}).`);
        }
        if (!response.ok) throw new Error(getGalleryError(response.status, payload));
        if (!Array.isArray(payload.items)) throw new Error('Gallery service returned an unexpected response.');
        setItems(normalizeGalleryItems(payload.items));
      } catch (requestError) {
        if ((requestError as Error).name !== 'AbortError') {
          setError(requestError instanceof TypeError ? 'Unable to reach the gallery service. Please check your connection.' : (requestError as Error).message || 'The latest social posts are temporarily unavailable.');
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    loadGallery();
    return () => controller.abort();
  }, [limit]);

  if (loading) return <div className={`mdm-gallery mdm-gallery--${layout}`} aria-busy="true">Loading projects…</div>;
  if (error) return <p role="status">{error}</p>;
  if (!items.length) return <p role="status">No approved projects are available yet.</p>;

  const galleryItems = layout === 'featured-first' ? [...items].sort((a, b) => (a.id === items[0]?.id ? -1 : b.id === items[0]?.id ? 1 : 0)) : items;

  return (
    <div className={`mdm-gallery mdm-gallery--${layout}`} aria-label="EMV project gallery">
      {galleryItems.map((item, index) => {
        const image = (
          <img
            src={item.thumbnailUrl || item.imageUrl}
            alt={item.alt || item.title || 'EMV Custom Pools project'}
            loading={index < 2 ? 'eager' : 'lazy'}
            decoding="async"
          />
        );
        return (
          <figure className={index === 0 && layout === 'featured-first' ? 'mdm-gallery__featured' : undefined} key={item.id || item.imageUrl}>
            {linkToSource && item.sourceUrl ? <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer">{image}</a> : image}
            {item.title && <figcaption>{item.title}</figcaption>}
          </figure>
        );
      })}
    </div>
  );
}

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
        if (!response.ok) throw new Error('Gallery request failed');
        const payload = await response.json();
        setItems(Array.isArray(payload.items) ? payload.items : []);
      } catch (requestError) {
        if ((requestError as Error).name !== 'AbortError') setError('Project gallery is temporarily unavailable.');
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

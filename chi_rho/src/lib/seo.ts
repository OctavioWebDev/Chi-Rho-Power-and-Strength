import type { Metadata } from 'next';

const SITE = 'Chi-Rho Power & Strength';

/**
 * A page's title and description, its canonical URL, plus the matching link preview. Next.js
 * replaces the layout's whole openGraph block when a page sets one, so the shared parts are
 * repeated here.
 *
 * `path` is the page's own clean path ('/gym', '/blog/squat-form-basics'), never with a query
 * string, so variants like /blog?category=programming name /blog as the original.
 */
export function pageMeta(title: string, description: string | undefined, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${SITE}`,
      description,
      siteName: SITE,
      locale: 'en_US',
      type: 'website',
      url: path,
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: SITE }],
    },
  };
}

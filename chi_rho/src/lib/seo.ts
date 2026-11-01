import type { Metadata } from 'next';

const SITE = 'Chi-Rho Power & Strength';

/**
 * A page's title and description, plus the matching link preview. Next.js replaces the
 * layout's whole openGraph block when a page sets one, so the shared parts are repeated here.
 */
export function pageMeta(title: string, description?: string): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${SITE}`,
      description,
      siteName: SITE,
      locale: 'en_US',
      type: 'website',
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: SITE }],
    },
  };
}

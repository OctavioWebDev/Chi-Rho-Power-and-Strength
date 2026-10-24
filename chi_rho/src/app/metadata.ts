import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Chi-Rho Power & Strength",
    template: "%s | Chi-Rho Power & Strength",
  },
  description: "Strength coaching for men in Toledo and online. Are you stronger than you were last month?",
  keywords: ['strength coaching', 'Toledo', 'barbell', 'powerlifting', 'online coaching'],
  authors: [{ name: 'Octavio Sanchez' }],
  creator: 'Octavio Sanchez',
  publisher: 'Chi-Rho Power & Strength',
  metadataBase: new URL('https://www.chirhostrength.com'),
  openGraph: {
    title: 'Chi-Rho Power & Strength',
    description: 'Strength coaching for men in Toledo and online. Are you stronger than you were last month?',
    siteName: 'Chi-Rho Power & Strength',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Chi-Rho Power & Strength',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

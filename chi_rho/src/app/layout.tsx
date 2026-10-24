import { Barlow, Barlow_Condensed } from 'next/font/google';
import "./globals.css";
import { Metadata } from 'next';
import Header from "./components/Header";
import Footer from "./components/Footer";

const display = Barlow_Condensed({ weight: ['500', '600', '700', '800'], subsets: ['latin'], variable: '--font-display' });
const body = Barlow({ weight: ['400', '500', '600'], style: ['normal', 'italic'], subsets: ['latin'], variable: '--font-body' });

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
  metadataBase: new URL('https://www.chirhostrength.com/'),
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon?<generated>" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon?<generated>" type="image/png" sizes="180x180" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0B0A08" />
      </head>
      <body className="bg-iron text-chalk font-body antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

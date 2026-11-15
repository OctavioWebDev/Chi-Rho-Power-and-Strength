// Business details for search engines (schema.org), on the homepage and /coaching/in-person.
// SportsActivityLocation is a kind of LocalBusiness. No street address on purpose: the city
// and the towns served are enough, and the coaching happens where the lifter trains.
const TOWNS = ['Toledo', 'Sylvania', 'Holland', 'Maumee', 'Perrysburg', 'Springfield Township'];

export const BUSINESS_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  name: 'Chi-Rho Power & Strength',
  url: 'https://www.chirhostrength.com',
  logo: 'https://www.chirhostrength.com/assets/logos/4885c978-6521-4cbf-85d6-fea7774ef2d9.png',
  image: 'https://www.chirhostrength.com/opengraph-image',
  description: 'Powerlifting and strength coaching in Toledo, Ohio, in person and online.',
  telephone: '(419) 343-9894',
  email: 'chirhostrength@gmail.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Toledo', addressRegion: 'OH', addressCountry: 'US' },
  areaServed: TOWNS.map((name) => ({
    '@type': 'City',
    name: `${name}, OH`,
    containedInPlace: { '@type': 'State', name: 'Ohio' },
  })),
  founder: { '@type': 'Person', name: 'Octavio Sanchez' },
  sameAs: ['https://www.instagram.com/chirhostrength/', 'https://www.youtube.com/@ChiRhoStrength'],
};

// The JSON for a <script type="application/ld+json">; "<" is escaped so the text can't end the tag.
export const businessJsonLd = () => JSON.stringify(BUSINESS_JSON_LD).replace(/</g, '\\u003c');

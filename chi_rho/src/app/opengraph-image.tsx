import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { ImageResponse } from 'next/og';

// The link preview for every page: the real logo on the site's iron background.
export const alt = 'Chi-Rho Power & Strength';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  const logo = await readFile(path.join(process.cwd(), 'public/assets/logos/4885c978-6521-4cbf-85d6-fea7774ef2d9.png'));
  const src = `data:image/png;base64,${logo.toString('base64')}`;
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', gap: 64, padding: '0 90px', background: '#0B0A08', color: '#F4F1EA' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" width={375} height={450} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 580 }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>Chi-Rho Power &amp; Strength</div>
          <div style={{ fontSize: 38, color: '#EAB308' }}>Stronger than last month?</div>
          <div style={{ fontSize: 30, color: '#9C968A' }}>Strength coaching in Toledo and online</div>
        </div>
      </div>
    ),
    size,
  );
}

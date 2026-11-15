import { permanentRedirect } from 'next/navigation';

// The old application form lived here. It's now the /apply intake sheet: a permanent (308)
// redirect that keeps every query parameter, so /contact?service=foundation still preselects.
// (It lives here, not in next.config.mjs: the PWA wrapper there passes only `webpack` through.)
export default function ContactPage({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(searchParams)) {
    for (const v of Array.isArray(value) ? value : value === undefined ? [] : [value]) params.append(key, v);
  }
  const query = params.toString();
  permanentRedirect(query ? `/apply?${query}` : '/apply');
}

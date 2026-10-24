import { permanentRedirect } from 'next/navigation';

// The old application form lived here. It's now the /apply intake sheet;
// keep ?service= so old links still preselect.
export default function ContactPage({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
  const service = searchParams.service;
  const s = Array.isArray(service) ? service[0] : service;
  permanentRedirect(s ? `/apply?service=${encodeURIComponent(s)}` : '/apply');
}

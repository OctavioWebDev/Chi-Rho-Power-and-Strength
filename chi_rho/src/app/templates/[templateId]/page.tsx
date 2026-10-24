// src/app/templates/[templateId]/page.tsx
import dynamicImport from 'next/dynamic';
import { Template } from '@/types/template';
import { templates } from '../templates';

// This is a server component that fetches the template data
export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: { templateId: string } }) {
  const template = templates[params.templateId as keyof typeof templates] || {
    title: 'Template Not Found',
    description: 'The requested training template could not be found.'
  };

  return {
    title: template.title,
    description: template.description,
    openGraph: {
      title: template.title,
      description: template.description,
    },
  };
}

// Dynamically import the client component with no SSR since it uses browser APIs
const TemplateClient = dynamicImport<{ template: Template }>(
  () => import('./TemplateClient'),
  { 
    ssr: false, 
    loading: () => (
      <p className="lg-wrap lg-small" style={{ paddingBlock: 60 }}>Loading…</p>
    )
  }
);

export default function TemplatePage({ params }: { params: { templateId: string } }) {
  const template = templates[params.templateId as keyof typeof templates];

  if (!template) {
    return (
      <main className="lg-wrap" style={{ paddingBlock: 60 }}>
        <h1 className="lg-h2">Program not found</h1>
        <p className="lg-lede">That program doesn&apos;t exist anymore.</p>
        <a className="lg-link" href="/templates">See all programs</a>
      </main>
    );
  }

  return <TemplateClient template={template} />;
}
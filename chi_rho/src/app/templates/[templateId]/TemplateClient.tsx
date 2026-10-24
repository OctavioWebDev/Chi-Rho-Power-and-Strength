// src/app/templates/[templateId]/TemplateClient.tsx
'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import type { Template } from '@/types/template';
import { Checklist, Cover, Entry, Faq } from '@/components/log';

type TemplateClientProps = {
  template: Template;
};

export default function TemplateClient({ template }: TemplateClientProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const success = searchParams.get('success');
  const canceled = searchParams.get('canceled');

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/checkout_sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          templateId: template.id,
          successUrl: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}&templateId=${template.id}`,
          cancelUrl: window.location.href,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }

      const { url } = await response.json();

      // Redirect to the Checkout page
      if (url) {
        window.location.href = url;
      } else {
        throw new Error('No checkout URL returned from server');
      }
    } catch {
      setError("Checkout didn't open. Try again, or email chirhostrength@gmail.com.");
    } finally {
      setLoading(false);
    }
  };

  const price = `$${template.price.toFixed(2)}`;
  const features: string[] = Array.isArray(template.features) ? [...template.features] : [];

  return (
    <main className="lg-wrap">
      <Entry label="Program" sub={template.level}>
        <p className="lg-byline">
          <Link href="/templates">← Programs</Link> · {template.duration} · {template.frequency}
        </p>
        {success ? <p className="lg-sent">Payment went through. Your download link is on its way by email.</p> : null}
        {canceled ? <p className="lg-muted">Checkout canceled. Nothing was charged.</p> : null}
        <div className="lg-bookrow lg-mt">
          <Cover top="Chi-Rho" title={template.title} bottom={`${template.duration} · ${template.level}`} />
          <div>
            <h1 className="lg-h1 lg-post-title">{template.title}</h1>
            <p className="lg-lede">{template.longDescription || template.description}</p>
            <div className="lg-ctas">
              <button type="button" className="lg-btn" onClick={handleCheckout} disabled={loading}>
                {loading ? 'Opening checkout…' : `Buy it · ${price}`}
              </button>
              <span className="lg-small">One-time payment</span>
            </div>
            {error ? <p className="lg-error" role="alert">{error}</p> : null}
          </div>
        </div>
      </Entry>

      {features.length ? (
        <Entry label="What's in it">
          <Checklist items={features} />
          {template.focus ? <p className="lg-small" style={{ marginTop: 14 }}>Focus: {template.focus}</p> : null}
        </Entry>
      ) : null}

      <Entry label="Questions">
        <Faq
          groups={[
            {
              items: [
                { q: 'How do I get it after I pay?', a: "Right after checkout you get an email with the download link." },
                { q: 'Money-back guarantee?', a: "Yes. 30 days. If it's not for you, you get your money back." },
                { q: 'Can I ask questions about the program?', a: 'Yes. Email support@chirhostrength.com.' },
              ],
            },
          ]}
        />
      </Entry>
    </main>
  );
}

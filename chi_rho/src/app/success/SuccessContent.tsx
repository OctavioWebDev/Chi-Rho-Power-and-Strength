'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ButtonLink, Entry, PageTitle } from '@/components/log';

export default function SuccessContent() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [downloadAttempted, setDownloadAttempted] = useState(false);
  
  const sessionId = searchParams.get('session_id');
  const templateId = searchParams.get('templateId');

  useEffect(() => {
    // Validate required parameters
    if (!sessionId || !templateId) {
      setError('Missing required information. Please contact support with your order confirmation.');
      setLoading(false);
      return;
    }

    // Auto-download on successful load
    if (!downloadAttempted) {
      setDownloadAttempted(true);
      setLoading(false);
      
      // Trigger download automatically
      const downloadUrl = `/api/download?templateId=${templateId}&session_id=${sessionId}`;
      
      // Create a hidden link and click it to trigger download
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, [sessionId, templateId, downloadAttempted]);

  const handleManualDownload = () => {
    if (!sessionId || !templateId) {
      setError('Missing required information');
      return;
    }
    
    window.location.href = `/api/download?templateId=${templateId}&session_id=${sessionId}`;
  };

  if (loading) {
    return <p className="lg-wrap lg-small" style={{ paddingBlock: 60 }}>Processing your purchase…</p>;
  }

  if (error) {
    return (
      <main className="lg-wrap">
        <Entry label="Purchase" sub="Problem">
          <PageTitle lede={error}>Something went wrong.</PageTitle>
          <p className="lg-small">Session: {sessionId || 'Not provided'} · Program: {templateId || 'Not provided'}</p>
          <p className="lg-small">
            Email <span className="lg-sel">chirhostrength@gmail.com</span> with those two lines and I&apos;ll sort it out.
          </p>
          <ButtonLink href="/templates" variant="line">Back to programs</ButtonLink>
        </Entry>
      </main>
    );
  }

  return (
    <main className="lg-wrap">
      <Entry label="Purchase" sub="Done">
        <PageTitle lede="Your program should download on its own. If it didn't, use the button below.">
          Got it. <em>Now go lift.</em>
        </PageTitle>
        <div className="lg-ctas">
          <button type="button" className="lg-btn" onClick={handleManualDownload}>
            Download the program
          </button>
          <ButtonLink href="/templates" variant="line">More programs</ButtonLink>
        </div>
        <p className="lg-small" style={{ marginTop: 22 }}>
          Order: {sessionId} · {templateId}
          <br />
          Trouble? Email <span className="lg-sel">chirhostrength@gmail.com</span>.
        </p>
      </Entry>
    </main>
  );
}

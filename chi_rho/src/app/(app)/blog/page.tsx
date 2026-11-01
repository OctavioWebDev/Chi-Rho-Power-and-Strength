import type { Metadata } from 'next'
import { Suspense } from 'react'
import BlogContent from './components/BlogContent'
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta('Articles', 'Straight answers about getting stronger: progressive overload, program hopping, beginner mistakes and more.');

export default function BlogPage() {
  return (
    <main className="lg-wrap">
      <Suspense fallback={null}>
        <BlogContent />
      </Suspense>
    </main>
  )
}

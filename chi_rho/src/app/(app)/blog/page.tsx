import type { Metadata } from 'next'
import { Suspense } from 'react'
import BlogContent from './components/BlogContent'

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Straight answers about getting stronger: progressive overload, program hopping, beginner mistakes and more.',
}

export default function BlogPage() {
  return (
    <main className="lg-wrap">
      <Suspense fallback={null}>
        <BlogContent />
      </Suspense>
    </main>
  )
}

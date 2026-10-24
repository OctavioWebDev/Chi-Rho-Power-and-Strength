'use client'
import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Entry, PageTitle } from '@/components/log'

export default function BlogContent() {
  const searchParams = useSearchParams()
  const selectedCategory = searchParams.get('category')

  const allPosts = [
    {
      slug: 'progressive-overload-explained',
      title: 'Progressive Overload: The Only Principle That Matters',
      excerpt: 'Understanding the single most important concept for building strength. Everything else is just details.',
      category: 'training',
      image: '/assets/images/samuel-girven-VJ2s0c20qCo-unsplash.jpg',
      date: 'January 6, 2026',
      readTime: '8 min read'
    },
    {
      slug: 'stop-program-hopping',
      title: 'Stop Program Hopping',
      excerpt: 'Why switching programs every 6 weeks is killing your progress.',
      category: 'training',
      image: '/assets/images/delaney-van-I72QeY20Q7o-unsplash.jpg',
      date: 'January 5, 2026',
      readTime: '6 min read'
    },
    {
      slug: 'beginner-mistakes',
      title: '5 Mistakes Every Beginner Makes',
      excerpt: 'Learn from my failures so you don\'t waste years like I did.',
      category: 'training',
      image: '/assets/images/jan-kahanek-fVUl6kzIvLg-unsplash.jpg',
      date: 'January 4, 2026',
      readTime: '7 min read'
    },
    {
      slug: 'squat-form-basics',
      title: 'Squat Form: The Basics',
      excerpt: 'Master the most important lift with these fundamental cues.',
      category: 'technique',
      image: '/assets/images/cathy-mu-UWFjqxYWAmA-unsplash.jpg',
      date: 'January 3, 2026',
      readTime: '10 min read'
    },
    {
      slug: 'training-consistency',
      title: 'Consistency > Perfection',
      excerpt: 'Why showing up beats optimization every single time.',
      category: 'mindset',
      image: '/assets/images/joshua-hoehne-0F4duBPWlCw-unsplash.jpg',
      date: 'January 2, 2026',
      readTime: '5 min read'
    }
  ]

  const categories: Record<string, string> = {
    training: 'Training fundamentals',
    technique: 'Technique & form',
    programming: 'Programming',
    mindset: 'Mindset',
    nutrition: 'Nutrition & recovery',
  }
  const posts = selectedCategory ? allPosts.filter((p) => p.category === selectedCategory) : allPosts
  const label = selectedCategory ? categories[selectedCategory] ?? 'Articles' : null

  return (
    <Entry label="Articles" sub={label ?? undefined}>
      <PageTitle lede="Straight answers about getting stronger.">
        From the <em>training log.</em>
      </PageTitle>
      {selectedCategory ? (
        <p><Link className="lg-link" href="/blog">All articles</Link></p>
      ) : null}
      {posts.length === 0 ? (
        <p className="lg-muted" style={{ marginTop: 24 }}>Nothing in this category yet.</p>
      ) : (
        <ul className="lg-articles">
          {posts.map((p) => (
            <li key={p.slug}>
              <time>{p.date}</time>
              <div>
                <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                <p>{p.excerpt}</p>
              </div>
              <span className="len">{p.readTime.replace(' read', '')}</span>
            </li>
          ))}
        </ul>
      )}
    </Entry>
  )
}

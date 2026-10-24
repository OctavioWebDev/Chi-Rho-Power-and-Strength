import { MetadataRoute } from 'next'

const URL = 'https://www.chirhostrength.com'

const BLOG_SLUGS = [
  'progressive-overload-explained',
  'stop-program-hopping',
  'beginner-mistakes',
  'squat-form-basics',
  'training-consistency',
]

const PAGES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
  { path: '', priority: 1, changeFrequency: 'weekly' },
  { path: '/coaching', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/coaching/online', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/coaching/in-person', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/coaching/group-classes', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/apply', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/gym', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/book', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/journal', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/philosophy', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/mystory', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/blog', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/faq', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/templates', priority: 0.7, changeFrequency: 'monthly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    ...PAGES.map((p) => ({ url: `${URL}${p.path}`, lastModified: now, changeFrequency: p.changeFrequency, priority: p.priority })),
    ...BLOG_SLUGS.map((slug) => ({ url: `${URL}/blog/${slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.6 })),
  ]
}

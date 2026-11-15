import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Entry } from '@/components/log'
import { notFound } from 'next/navigation'
import { pageMeta } from '@/lib/seo';
import { blogPosts } from '@/lib/blog-posts';

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
    const post = blogPosts[params.slug]
    return post ? pageMeta(post.seoTitle ?? post.title, post.excerpt, `/blog/${params.slug}`) : {}
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = blogPosts[params.slug]

    if (!post) {
        notFound()
    }

    return (
        <main className="lg-wrap">
            <Entry label="Article" sub={post.readTime.replace(' read', '')}>
                <p className="lg-byline">
                    <Link href="/blog">← Articles</Link> · {post.date} · {post.author}
                </p>
                <h1 className="lg-h1 lg-post-title">{post.title}</h1>
                <p className="lg-lede lg-muted">{post.excerpt}</p>
                <div className="lg-post" dangerouslySetInnerHTML={{ __html: post.content }} />
                <div className="lg-ctas" style={{ marginTop: 28 }}>
                    <Link className="lg-link" href="/book">Read the book</Link>
                    <Link className="lg-link" href="/coaching">Get coached</Link>
                </div>
            </Entry>
        </main>
    )
}

import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/sobre-el-proyecto`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
    ]

    // Dynamic book pages
    const booksDirectory = path.join(process.cwd(), 'content/books')
    let bookPages: MetadataRoute.Sitemap = []

    try {
        const bookFiles = fs.readdirSync(booksDirectory)
        bookPages = bookFiles
            .filter(file => file.endsWith('.json'))
            .map(file => {
                const slug = file.replace('.json', '')
                return {
                    url: `${baseUrl}/libro/${slug}`,
                    lastModified: new Date(),
                    changeFrequency: 'monthly' as const,
                    priority: 0.9,
                }
            })
    } catch (error) {
        console.log('No books directory found yet')
    }

    // Dynamic blog pages
    const blogDirectory = path.join(process.cwd(), 'content/blog')
    let blogPages: MetadataRoute.Sitemap = []

    try {
        const blogFiles = fs.readdirSync(blogDirectory)
        blogPages = blogFiles
            .filter(file => file.endsWith('.mdx'))
            .map(file => {
                const slug = file.replace('.mdx', '')
                return {
                    url: `${baseUrl}/blog/${slug}`,
                    lastModified: new Date(),
                    changeFrequency: 'monthly' as const,
                    priority: 0.7,
                }
            })
    } catch (error) {
        console.log('No blog directory found yet')
    }

    return [...staticPages, ...bookPages, ...blogPages]
}

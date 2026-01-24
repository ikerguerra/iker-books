import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import styles from './page.module.css';

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return {
            title: 'Artículo no encontrado',
        };
    }

    return {
        title: post.title,
        description: post.description,
        keywords: post.keywords,
        authors: [{ name: post.author }],
        alternates: {
            canonical: `/blog/${slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
            images: [
                {
                    url: post.image,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
            images: [post.image],
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    // Schema markup for Article
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.description,
        author: {
            '@type': 'Person',
            name: post.author,
        },
        datePublished: post.date,
        keywords: post.keywords.join(', '),
        image: post.image,
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Inicio',
                item: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ikerguerra.com',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Blog',
                item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ikerguerra.com'}/blog`,
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: post.title,
                item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ikerguerra.com'}/blog/${post.slug}`,
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Header />
            <main className={styles.main}>
                <article className={styles.article}>
                    <Container size="narrow">
                        <header className={styles.header}>
                            <h1 className={styles.title}>{post.title}</h1>
                            <div className={styles.meta}>
                                <time dateTime={post.date} className={styles.date}>
                                    {new Date(post.date).toLocaleDateString('es-ES', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                </time>
                                <span className={styles.separator}>•</span>
                                <span className={styles.author}>{post.author}</span>
                            </div>
                        </header>

                        <div
                            className={styles.content}
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </Container>
                </article>
            </main>
            <Footer />
        </>
    );
}

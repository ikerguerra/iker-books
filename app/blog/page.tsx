import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { getAllPosts } from '@/lib/blog';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Artículos sobre terror psicológico, ciencia ficción distópica, y el arte de construir mundos inquietantes.',
    openGraph: {
        title: 'Blog - Iker Guerra',
        description: 'Exploraciones sobre terror psicológico y narrativa distópica',
    },
    alternates: {
        canonical: 'https://iker-books.vercel.app/blog',
    },
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <>
            <Header />
            <main className={styles.main}>
                <Container>
                    <div className={styles.header}>
                        <h1 className={styles.title}>Blog</h1>
                        <p className={styles.subtitle}>
                            Exploraciones sobre terror psicológico, ciencia ficción distópica,
                            y el arte de construir mundos inquietantes
                        </p>
                    </div>

                    <div className={styles.grid}>
                        {posts.map((post) => (
                            <article key={post.slug} className={styles.card}>
                                <Link href={`/blog/${post.slug}`} className={styles.cardLink}>
                                    <h2 className={styles.cardTitle}>{post.title}</h2>
                                    <p className={styles.cardDescription}>{post.description}</p>
                                    <div className={styles.cardMeta}>
                                        <time dateTime={post.date} className={styles.cardDate}>
                                            {new Date(post.date).toLocaleDateString('es-ES', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                            })}
                                        </time>
                                        <span className={styles.readMore}>Leer artículo →</span>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                </Container>
            </main>
            <Footer />
        </>
    );
}

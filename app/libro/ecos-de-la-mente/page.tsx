import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import bookData from '@/content/books/ecos-de-la-mente.json';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: `${bookData.title} - ${bookData.genre}`,
    description: bookData.metaDescription,
    keywords: bookData.keywords,
    openGraph: {
        title: bookData.title,
        description: bookData.metaDescription,
        type: 'book',
        images: [
            {
                url: bookData.coverImage,
                width: 800,
                height: 1200,
                alt: `Portada de ${bookData.title}`
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: bookData.title,
        description: bookData.metaDescription,
        images: [bookData.coverImage],
    },
};

export default function BookPage() {
    // Schema markup for Book
    const bookSchema = {
        '@context': 'https://schema.org',
        '@type': 'Book',
        name: bookData.title,
        author: {
            '@type': 'Person',
            name: 'Iker Guerra'
        },
        genre: bookData.genre,
        bookFormat: 'EBook',
        inLanguage: bookData.language,
        numberOfPages: bookData.pages,
        description: bookData.synopsis,
        keywords: bookData.keywords.join(', '),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
            />
            <Header />
            <main className={styles.main}>
                {/* Hero Section with Cover */}
                <section className={styles.hero}>
                    <Container>
                        <div className={styles.heroContent}>
                            <div className={styles.coverContainer}>
                                <Image
                                    src={bookData.coverImage}
                                    alt={`Portada de ${bookData.title}`}
                                    width={400}
                                    height={600}
                                    priority
                                    className={styles.coverImage}
                                />
                            </div>
                            <div className={styles.heroInfo}>
                                <h1 className={styles.title}>{bookData.title}</h1>
                                <p className={styles.subtitle}>{bookData.subtitle}</p>
                                <p className={styles.genre}>{bookData.genre}</p>
                                <div className={styles.meta}>
                                    <span>{bookData.format}</span>
                                    <span>•</span>
                                    <span>{bookData.pages} páginas</span>
                                    <span>•</span>
                                    <span>{bookData.stories.length} relatos</span>
                                </div>
                                <div className={styles.heroButtons}>
                                    <Button
                                        href={bookData.amazonUrl}
                                        variant="primary"
                                        size="lg"
                                        external
                                    >
                                        Disponible en Kindle Unlimited
                                    </Button>
                                    <Button
                                        href="#excerpt"
                                        variant="ghost"
                                        size="lg"
                                    >
                                        Leer extracto
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Synopsis Section */}
                <section className={styles.synopsis}>
                    <Container size="narrow">
                        <h2 className={styles.sectionTitle}>Sinopsis</h2>
                        <div className={styles.synopsisContent}>
                            {bookData.synopsis.split('\n\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* Stories Section */}
                <section className={styles.stories}>
                    <Container>
                        <h2 className={styles.sectionTitle}>Los relatos</h2>
                        <div className={styles.storyGrid}>
                            {bookData.stories.map((story, index) => (
                                <div key={index} className={styles.storyCard}>
                                    <div className={styles.storyNumber}>{String(index + 1).padStart(2, '0')}</div>
                                    <h3 className={styles.storyTitle}>{story.title}</h3>
                                    <p className={styles.storyDescription}>{story.description}</p>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* Excerpt Section */}
                <section id="excerpt" className={styles.excerpt}>
                    <Container size="narrow">
                        <h2 className={styles.sectionTitle}>Extracto</h2>
                        <div className={styles.excerptContent}>
                            <p className={styles.excerptLabel}>Del relato "Sincronización Completa"</p>
                            <div className={styles.excerptText}>
                                {bookData.excerpt.split('\n\n').map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    </Container>
                </section>

                {/* CTA Section */}
                <section className={styles.cta}>
                    <Container size="narrow">
                        <div className={styles.ctaContent}>
                            <h2 className={styles.ctaTitle}>Sumérgete en el terror psicológico</h2>
                            <p className={styles.ctaDescription}>
                                Disponible ahora en Amazon Kindle Unlimited. Lee los cinco relatos completos
                                y explora los límites de la realidad.
                            </p>
                            <Button
                                href={bookData.amazonUrl}
                                variant="primary"
                                size="lg"
                                external
                            >
                                Leer en Kindle Unlimited
                            </Button>
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}

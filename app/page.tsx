import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://iker-books.vercel.app';

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Iker Guerra - Autor',
    url: siteUrl,
    description: 'Autor de terror psicológico y ciencia ficción distópica',
    publisher: {
      '@type': 'Person',
      name: 'Iker Guerra'
    }
  };

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Iker Guerra',
    url: siteUrl,
    jobTitle: 'Escritor',
    sameAs: [
      'https://www.amazon.com/author/ikerguerra'
    ],
    description: 'Autor especializado en terror psicológico y ciencia ficción distópica.'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <Container>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Donde la realidad se <span className={styles.gradient}>fractura</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Terror psicológico y ciencia ficción distópica que exploran los límites
                de la mente humana y los espacios imposibles
              </p>
              <div className={styles.heroButtons}>
                <Button href="/libro/ecos-de-la-mente" variant="primary" size="lg">
                  Descubre Ecos de la mente
                </Button>
                <Button href="/blog" variant="ghost" size="lg">
                  Explorar artículos
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Author Presentation */}
        <section className={styles.about}>
          <Container size="narrow">
            <h2 className={styles.sectionTitle}>Universo narrativo</h2>
            <div className={styles.aboutContent}>
              <p>
                Exploro los rincones más oscuros de la psique humana a través de historias
                que desafían la percepción de la realidad. Mis relatos habitan en la
                intersección entre el <strong>terror psicológico</strong> y la <strong>ciencia
                  ficción distópica</strong>, donde la tecnología se convierte en una jaula
                invisible y los espacios cotidianos ocultan geometrías imposibles.
              </p>
              <p>
                Cada historia es una exploración de la <strong>vigilancia omnipresente</strong>,
                la <strong>pérdida de identidad</strong>, el <strong>aislamiento extremo</strong>
                y la <strong>culpa que corroe desde dentro</strong>. No busco el susto fácil,
                sino la inquietud persistente que permanece después de cerrar el libro.
              </p>
            </div>
          </Container>
        </section>

        {/* Featured Book */}
        <section className={styles.featured}>
          <Container>
            <h2 className={styles.sectionTitle}>Libro destacado</h2>
            <div className={styles.bookCard}>
              <div className={styles.bookCover}>
                <Image
                  src="/Portada_ecos_de_la_mente_relatos_de_terror_psicologico.png"
                  alt="Portada de Ecos de la mente - Relatos de terror psicológico"
                  width={400}
                  height={600}
                  priority
                  className={styles.coverImage}
                />
              </div>
              <div className={styles.bookInfo}>
                <h3 className={styles.bookTitle}>Ecos de la mente</h3>
                <p className={styles.bookGenre}>Terror Psicológico • Ciencia Ficción Distópica</p>
                <p className={styles.bookDescription}>
                  Cinco microhistorias que te sumergirán en universos donde la realidad
                  se fractura y la mente humana enfrenta sus límites más oscuros.
                </p>
                <ul className={styles.storyList}>
                  <li><strong>Sincronización Completa</strong> - Vigilancia y simulación de realidad</li>
                  <li><strong>La simetría de los geranios</strong> - Horror suburbano artificial</li>
                  <li><strong>Protocolo de Aguas Muertas</strong> - Aislamiento y bucles temporales</li>
                  <li><strong>Intervalo</strong> - Causalidad rota y desfase temporal</li>
                  <li><strong>El tabique</strong> - Culpa familiar y espacios imposibles</li>
                </ul>
                <div className={styles.bookActions}>
                  <Button href="/libro/ecos-de-la-mente" variant="primary">
                    Leer más
                  </Button>
                  <Button
                    href="https://www.amazon.com/dp/B0GGJ2H1TD"
                    variant="secondary"
                    external
                  >
                    Disponible en Kindle Unlimited
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Themes Section */}
        <section className={styles.themes}>
          <Container>
            <h2 className={styles.sectionTitle}>Temáticas que exploro</h2>
            <div className={styles.themeGrid}>
              <div className={styles.themeCard}>
                <h3 className={styles.themeTitle}>Vigilancia y Control</h3>
                <p className={styles.themeDescription}>
                  Sistemas que observan, registran y editan la realidad. La pérdida de
                  privacidad como horror existencial.
                </p>
              </div>
              <div className={styles.themeCard}>
                <h3 className={styles.themeTitle}>Identidad Fragmentada</h3>
                <p className={styles.themeDescription}>
                  Duplicados, simulaciones y versiones de uno mismo que cuestionan qué
                  significa ser real.
                </p>
              </div>
              <div className={styles.themeCard}>
                <h3 className={styles.themeTitle}>Espacios Imposibles</h3>
                <p className={styles.themeDescription}>
                  Geometrías que no deberían existir, habitaciones que se encogen,
                  paredes que ocultan otras realidades.
                </p>
              </div>
              <div className={styles.themeCard}>
                <h3 className={styles.themeTitle}>Aislamiento Extremo</h3>
                <p className={styles.themeDescription}>
                  La soledad como catalizador de la locura. Estaciones remotas,
                  urbanizaciones vacías, rutinas infinitas.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Sobre el proyecto',
    description: 'Descubre la visión creativa detrás de los relatos de terror psicológico y ciencia ficción distópica. Un universo narrativo donde la realidad se fractura.',
    openGraph: {
        title: 'Sobre el proyecto - Iker Guerra',
        description: 'La visión creativa detrás del terror psicológico',
    },
    alternates: {
        canonical: 'https://iker-books.vercel.app/sobre-el-proyecto',
    },
};

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <Container size="narrow">
                    <div className={styles.content}>
                        <h1 className={styles.title}>Sobre el proyecto</h1>

                        <section className={styles.section}>
                            <h2 className={styles.subtitle}>La visión</h2>
                            <p>
                                Este proyecto nace de una fascinación por los <strong>espacios liminales de la mente humana</strong>:
                                esos momentos en los que la realidad cotidiana se vuelve extraña, cuando un sistema que
                                debería protegernos se convierte en nuestra jaula, o cuando descubrimos que el mundo
                                que habitamos no es tan sólido como creíamos.
                            </p>
                            <p>
                                No busco el horror explícito ni la violencia gratuita. Me interesa el <strong>terror
                                    psicológico</strong> que se filtra lentamente, que permanece después de cerrar el libro,
                                que te hace cuestionar la naturaleza de tu propia percepción.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.subtitle}>Filosofía narrativa</h2>
                            <p>
                                Cada relato es un experimento con las convenciones del género. Combino elementos de:
                            </p>
                            <ul className={styles.list}>
                                <li><strong>Ciencia ficción distópica</strong> - Tecnologías de vigilancia, simulaciones de realidad, sistemas que controlan cada aspecto de la existencia</li>
                                <li><strong>Horror existencial</strong> - La pérdida de identidad, la fragmentación del yo, la imposibilidad de confiar en los propios recuerdos</li>
                                <li><strong>Realismo inquietante</strong> - Situaciones cotidianas que se tuercen de formas sutiles pero irreversibles</li>
                            </ul>
                            <p>
                                El resultado son historias que habitan en la <strong>intersección entre lo familiar y lo imposible</strong>,
                                donde un apartamento puede convertirse en una trampa temporal, una urbanización perfecta oculta
                                un horror sintético, o una pared guarda secretos que nunca debieron ser descubiertos.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.subtitle}>El universo temático</h2>
                            <p>
                                Aunque cada relato es independiente, todos comparten un <strong>ADN conceptual</strong>:
                            </p>
                            <div className={styles.themeGrid}>
                                <div className={styles.themeItem}>
                                    <h3>Vigilancia omnipresente</h3>
                                    <p>Sistemas que observan, registran y editan la realidad sin que podamos escapar de su mirada.</p>
                                </div>
                                <div className={styles.themeItem}>
                                    <h3>Identidad fragmentada</h3>
                                    <p>¿Quién eres cuando existen múltiples versiones de ti? ¿Cuál es la real?</p>
                                </div>
                                <div className={styles.themeItem}>
                                    <h3>Espacios imposibles</h3>
                                    <p>Geometrías que no deberían existir, habitaciones que se encogen, paredes que ocultan otras dimensiones.</p>
                                </div>
                                <div className={styles.themeItem}>
                                    <h3>Culpa y memoria</h3>
                                    <p>El pasado que regresa, los secretos que se niegan a permanecer enterrados.</p>
                                </div>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.subtitle}>Por qué escribo</h2>
                            <p>
                                Escribo porque creo que el <strong>terror psicológico</strong> es una de las formas más
                                honestas de explorar la condición humana contemporánea. Vivimos en una era de vigilancia
                                digital, identidades fragmentadas en redes sociales, y una sensación creciente de que
                                la realidad misma es maleable.
                            </p>
                            <p>
                                Mis relatos no ofrecen respuestas reconfortantes. En cambio, plantean preguntas incómodas:
                                ¿Qué significa ser real en un mundo de simulaciones? ¿Cómo mantenemos nuestra identidad
                                cuando todo está siendo registrado y editado? ¿Dónde termina la memoria y comienza la ficción?
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.subtitle}>El futuro del proyecto</h2>
                            <p>
                                <em>Ecos de la mente</em> es solo el comienzo. Hay más historias esperando en los
                                márgenes de la realidad, más espacios imposibles por explorar, más sistemas que revelarán
                                su verdadera naturaleza.
                            </p>
                            <p>
                                Si estas historias resuenan contigo, si sientes esa misma inquietud ante lo familiar
                                que se vuelve extraño, te invito a seguir este viaje hacia los rincones más oscuros
                                de la psique humana.
                            </p>
                        </section>
                    </div>
                </Container>
            </main>
            <Footer />
        </>
    );
}

import Link from 'next/link';
import styles from './Header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo} aria-label="Iker Guerra - Inicio">
                    <span className={styles.logoText}>Iker Guerra</span>
                </Link>

                <nav className={styles.nav} aria-label="Navegación principal">
                    <Link href="/" className={styles.navLink}>
                        Inicio
                    </Link>
                    <Link href="/libro/ecos-de-la-mente" className={styles.navLink}>
                        Libro
                    </Link>
                    <Link href="/blog" className={styles.navLink}>
                        Blog
                    </Link>
                    <Link href="/sobre-el-proyecto" className={styles.navLink}>
                        Sobre el proyecto
                    </Link>
                </nav>
            </div>
        </header>
    );
};

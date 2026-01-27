import styles from './Footer.module.css';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer} aria-label="Pie de página">
            <div className={styles.container}>
                <div className={styles.content}>
                    <p className={styles.copyright}>
                        © {currentYear} Iker Guerra. Todos los derechos reservados.
                    </p>
                    <p className={styles.tagline}>
                        Relatos de terror psicológico y ciencia ficción distópica.
                    </p>
                </div>
            </div>
        </footer>
    );
};

import styles from './Footer.module.css';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <p className={styles.copyright}>
                        © {currentYear} Iker Guerra. Todos los derechos reservados.
                    </p>
                    <p className={styles.tagline}>
                        Explorando los límites de la realidad a través del terror psicológico
                    </p>
                </div>
            </div>
        </footer>
    );
};

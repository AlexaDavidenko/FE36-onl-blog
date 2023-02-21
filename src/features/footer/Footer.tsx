import ThemeSwitcher from '../theme-switcher/ThemeSwitcher';
import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <>
            <div className="container">
                <footer className={styles.footer}>
                    <span className={styles.copy}>&copy;2020 Blogolog</span>
                    <div>
                        <ThemeSwitcher />
                    </div>
                </footer>
            </div>
        </>
    )
}

import {Logo} from '../logo/Logo';
import {SearchBar} from '../search-bar/SearchBar';
import {User} from '../user/User';
import styles from './Header.module.css';

export const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <Logo />
                <div className={styles.search}>
                    <SearchBar />
                </div>
                <User />
            </header>
        </>
    )
}
import {Logo} from '../logo/Logo';
import {Search} from '../search/Search';
import {User} from '../user/User';
import styles from './Header.module.css';

export const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <Logo />
                <div className={styles.search}>
                    <Search />
                </div>
                <User />
            </header>
        </>
    )
}
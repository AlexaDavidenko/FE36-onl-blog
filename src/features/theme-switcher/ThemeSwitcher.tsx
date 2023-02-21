import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectTheme, toggleTheme} from './themeSlice';
import {Theme} from './Theme.enum';
import styles from './ThemeSwitcher.module.css';
import SlideToggle from '../slide-toggle/SlideToggle';

const ThemeSwitcher = () => {
    const theme = useAppSelector(selectTheme);
    const dispatch = useAppDispatch();

    const isDarkTheme = theme === Theme.DARK;

    return (
        <>
            <div className={styles.wrapper}>
                <span>Dark theme</span>

                <SlideToggle checked={isDarkTheme} onChange={() => dispatch(toggleTheme())} />
            </div>
        </>
    )
}
export default ThemeSwitcher;

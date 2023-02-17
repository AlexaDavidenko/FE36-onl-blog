import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import styles from './App.module.css';
import './index.css';
import {Blog} from './features/blog/Blog';
import {Post} from './features/post/Post';
import {Header} from './features/header/Header';
import {Footer} from './features/footer/Footer';
import {useAppSelector} from './app/hooks';
import {selectTheme} from './features/theme-switcher/themeSlice';
import {Theme} from './features/theme-switcher/Theme.enum';
import {Search} from './features/search/Search';

function App() {
    const theme = useAppSelector(selectTheme);

    const isDarkTheme = theme === Theme.DARK;

    const classNames = [
        styles.App
    ];

    if (isDarkTheme) {
        classNames.push('dark-theme');
    }

    return (
        <div className={classNames.join(' ')}>
            <BrowserRouter>
                <Header />

                <div className={styles.content}>
                    <Routes>
                        <Route path="/" element={<Blog />}></Route>
                        <Route path="post/:id" element={<Post />}></Route>
                        <Route path="search" element={<Search />}></Route>
                        <Route path={'*'} element={<>Not found</>}></Route>
                    </Routes>
                </div>

                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;

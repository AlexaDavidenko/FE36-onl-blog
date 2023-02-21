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
import Page404 from './features/404/Page404';
import ProtectedRoute from './features/protected-route/ProtectedRoute';
import {selectAuthenticated} from './features/user/userSlice';
import SignIn from './features/sign-in/SignIn';
import SignUp from './features/sign-up/SignUp';

function App() {
    const theme = useAppSelector(selectTheme);
    const isAuthenticated = useAppSelector(selectAuthenticated);

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
                        <Route path="sign-in" element={<SignIn />}></Route>
                        <Route path="sign-up" element={<SignUp />}></Route>
                        <Route path={'*'} element={<Page404 />}></Route>
                        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated}/>}>
                            <Route path="/" element={<Blog />}></Route>
                            <Route path="post/:id" element={<Post />}></Route>
                            <Route path="search" element={<Search />}></Route>
                        </Route>
                    </Routes>
                </div>

                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;

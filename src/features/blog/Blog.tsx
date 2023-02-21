import styles from './Blog.module.css';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {postsAsync, selectCurrentPage, selectFilterStatus, setFilterStatus, setPage} from './blogSlice';
import {useEffect} from 'react';
import {Filter} from '../filter/FIlter';
import {PostsBlock} from '../posts-block/PostsBlock';

export const Blog = () => {
    const currentPage = useAppSelector(selectCurrentPage);
    const filterStatus = useAppSelector(selectFilterStatus);
    const dispatch = useAppDispatch();

    const loadPosts = () => {
        const postParams = {currentPage, filterStatus}

        dispatch(postsAsync(postParams));
    };

    useEffect(() => {
        dispatch(setPage(1));
    }, []);

    useEffect(() => {
        loadPosts();
    }, [currentPage, filterStatus]);

    return (
        <>
            <div className={styles.wrapper + ' container'}>
                <h1>Blog</h1>
                <div className={styles.panel}>
                    <Filter currentFilter={filterStatus} onChange={(value) => dispatch(setFilterStatus(value))}/>
                </div>

                <div className={styles.blog}>
                    <PostsBlock />
                </div>
            </div>
        </>
    )
};
import styles from './Blog.module.css';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {
    postsAsync,
    selectCurrentPage,
    selectFilterStatus,
    selectSort,
    setFilterStatus,
    setPage,
    setSort
} from './blogSlice';
import {useEffect} from 'react';
import {Filter} from '../filter/FIlter';
import {PostsBlock} from '../posts-block/PostsBlock';
import SortBlock from '../sort/SortBlock';

export const Blog = () => {
    const currentPage = useAppSelector(selectCurrentPage);
    const filterStatus = useAppSelector(selectFilterStatus);
    const sort = useAppSelector(selectSort);
    const dispatch = useAppDispatch();

    const loadPosts = () => {
        const postParams = {currentPage, filterStatus, sort}

        dispatch(postsAsync(postParams));
    };

    useEffect(() => {
        dispatch(setPage(1));
    }, []);

    useEffect(() => {
        loadPosts();
    }, [currentPage, filterStatus, sort]);

    return (
        <>
            <div className={styles.wrapper + ' container'}>
                <h1>Blog</h1>
                <div className={styles.panel}>
                    <Filter currentFilter={filterStatus} onChange={(value) => dispatch(setFilterStatus(value))}/>
                    <SortBlock currentSort={sort} onChange={(value) => dispatch(setSort(value))}/>
                </div>

                <div className={styles.blog}>
                    <PostsBlock />
                </div>
            </div>
        </>
    )
};
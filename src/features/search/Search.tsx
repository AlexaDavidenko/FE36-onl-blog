import styles from './Search.module.css';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {searchAsync, selectCurrentPage, selectSearch, setPage} from '../blog/blogSlice';
import {PostsBlock} from '../posts-block/PostsBlock';
import {useEffect} from 'react';
import {Sort} from '../sort/Sort';

export const Search = () => {
    const search = useAppSelector(selectSearch);
    const currentPage = useAppSelector(selectCurrentPage);
    const dispatch = useAppDispatch();

    const loadPosts = () => {
        const postParams = {search, currentPage, sort: Sort.ASC}

        dispatch(searchAsync(postParams));
    };

    useEffect(() => {
        dispatch(setPage(1));
    }, []);

    useEffect(() => {
        loadPosts();
    }, [search, currentPage]);

    return (
        <>
            <div className={styles.wrapper + ' container'}>
                <h1>Search results for `{search}`</h1>
                <div className={styles.posts}>
                    <PostsBlock />
                </div>
            </div>
        </>
    )
}
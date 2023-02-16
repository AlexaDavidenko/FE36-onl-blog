import styles from './Blog.module.css';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {
    pageChange,
    postsAsync,
    selectBlogStatus,
    selectCurrentPage,
    selectFilterStatus,
    selectPageCount,
    selectPosts, selectSearch, setFilterStatus
} from './blogSlice';
import {useEffect} from 'react';
import {Status} from '../util/Status.enum';
import {Loading} from '../loading/Loading';
import {Posts} from '../posts/Posts';
import {Paginator} from '../paginator/Paginator';
import {Filter} from '../filter/FIlter';
import {Simulate} from 'react-dom/test-utils';
import load = Simulate.load;

export const Blog = () => {
    const loadingStatus = useAppSelector(selectBlogStatus);
    const posts = useAppSelector(selectPosts);
    const currentPage = useAppSelector(selectCurrentPage);
    const pageCount = useAppSelector(selectPageCount);
    const filterStatus = useAppSelector(selectFilterStatus);
    const search = useAppSelector(selectSearch);
    const dispatch = useAppDispatch();

    const postParams = {currentPage, filterStatus, search}
    const loadPosts = () => {
        dispatch(postsAsync(postParams));
    };

    useEffect(() => {
        loadPosts();
    }, []);

    useEffect(() => {
        loadPosts();
    }, [currentPage, filterStatus, search]);

    return (
        <>
            <div className={styles.wrapper + ' container'}>
                <h1>Blog</h1>
                <div className={styles.panel}>
                    <Filter currentFilter={filterStatus} onChange={(value) => dispatch(setFilterStatus(value))}/>
                </div>

                <div className={styles.blog}>
                    {loadingStatus === Status.LOADING ? <Loading /> : <Posts posts={posts}/>}
                </div>

                <div className={styles.paginator}>
                    <Paginator currentPage={currentPage} pageCount={pageCount} onChange={(page) => dispatch(pageChange(page))} />
                </div>
            </div>
        </>
    )
};
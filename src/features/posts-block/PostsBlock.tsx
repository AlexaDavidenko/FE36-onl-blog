import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectBlogStatus, selectCurrentPage, selectPageCount, selectPosts, setPage} from '../blog/blogSlice';
import {Status} from '../util/Status.enum';
import {Loading} from '../loading/Loading';
import {Posts} from '../posts/Posts';
import styles from './PostsBlock.module.css';
import {Paginator} from '../paginator/Paginator';

export const PostsBlock = () => {
    const loadingStatus = useAppSelector(selectBlogStatus);
    const posts = useAppSelector(selectPosts);
    const currentPage = useAppSelector(selectCurrentPage);
    const pageCount = useAppSelector(selectPageCount);
    const dispatch = useAppDispatch();

    return (
        <>
            <div className={styles.items}>
                {loadingStatus === Status.LOADING
                    ? <div className={styles.loading}><Loading /></div>
                    : <Posts items={posts}/>}
            </div>

            <div className={styles.paginator}>
                <Paginator currentPage={currentPage} pageCount={pageCount} onChange={(page) => dispatch(setPage(page))} />
            </div>
        </>
    )
}
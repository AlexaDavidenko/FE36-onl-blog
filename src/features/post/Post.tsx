import styles from './Post.module.css';
import {Link, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {postAsync, selectPost} from './postSlice';
import {useEffect} from 'react';
import {PostsSimilar} from '../posts-similar/PostsSimilar';
import {Social} from '../social/Social';

export const Post = () => {
    const {id} = useParams();

    const post = useAppSelector(selectPost);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (id) {
            dispatch(postAsync(id));
        }
    }, []);

    useEffect(() => {
        if (id) {
            dispatch(postAsync(id));
        }
    }, [id]);

    return (
        <>
            <div className={styles.post + ' container'}>
                <div className={styles.breadcrumbs}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li>/</li>
                        <li>Post {post.id}</li>
                    </ul>
                </div>
                <h1>{post.title}</h1>
                <div className={styles.image}>
                    <img src={post.image} alt={post.title} />
                </div>
                <div className={styles.p}>
                    <div dangerouslySetInnerHTML={{__html: post.description}}></div>
                </div>

                <div>
                    <Social />
                </div>

                <div className={styles.postsSimilar}>
                    <PostsSimilar />
                </div>
            </div>
        </>
    )
}
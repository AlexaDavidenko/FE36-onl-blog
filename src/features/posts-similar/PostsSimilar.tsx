import {Posts} from '../posts/Posts';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {useEffect} from 'react';
import {postsSimilarAsync, selectPostsSimilar} from './postsSimilarSlice';

export const PostsSimilar = () => {
    const posts = useAppSelector(selectPostsSimilar);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postsSimilarAsync(3));
    }, []);

    return (
        <>
            <Posts items={posts} />
        </>
    )
}
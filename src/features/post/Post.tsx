import styles from './Post.module.css';
import {useParams} from 'react-router-dom';

export const Post = () => {
    const {id} = useParams();

    return (
        <>
            <div className={styles.post}>
                <h1>{id}</h1>
                {/*<img src={image} alt={title} />*/}
                {/*<p>{description}</p>*/}
            </div>
        </>
    )
}
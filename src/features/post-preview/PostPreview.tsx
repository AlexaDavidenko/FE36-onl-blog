import styles from './PostPreview.module.css';
import {Link} from 'react-router-dom';
import {IPost} from '../post/IPost';
import {formatDate} from '../util/Util';

export const PostPreview = ({title, description, image, id, createdAt}: IPost) => {
    const date = formatDate(createdAt);

    return (
        <>
            <div className={styles.post}>
                <img src={image} alt={title} />
                <div className={styles.description}>
                    <div className={styles.date}>{date}</div>
                    <Link to={'/post/' + id} className={styles.link}>{title}</Link>
                </div>
            </div>
        </>
    )
}
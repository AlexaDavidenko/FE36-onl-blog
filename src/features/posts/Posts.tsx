import {PostPreview} from '../post-preview/PostPreview';
import {IPost} from '../post/IPost';
import styles from './Posts.module.css';

export const Posts = ({items}: {items: IPost[]}) => {
    return (
        <>
            <div className={styles.wrapper}>

                {
                    items.length ?
                        items.map(post => {
                            return <PostPreview {...post} key={post.id}/>
                        })
                    :
                    <div className={styles.noItems}>No items</div>
                }
            </div>
        </>
    )
}
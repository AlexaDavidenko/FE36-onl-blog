import styles from './User.module.css';

export const User = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.avatar}>AM</div>
                <div className={styles.userName}>Artem Malkin</div>
            </div>
        </>
    )
}
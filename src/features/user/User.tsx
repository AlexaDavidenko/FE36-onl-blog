import styles from './User.module.css';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {loadUserAsync, selectAccessToken, selectAuthenticated, selectUserName} from './userSlice';
import {firstLetters} from '../util/Util';
import {useEffect} from 'react';

const User = () => {
    const userName = useAppSelector(selectUserName);
    const isAuthenticated = useAppSelector(selectAuthenticated);
    const token = useAppSelector(selectAccessToken);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isAuthenticated) {
            dispatch(loadUserAsync(token));
        }
    }, [isAuthenticated]);

    return (
        <>
            <div className={styles.wrapper}>
                {isAuthenticated ?
                    <>
                        <div className={styles.avatar}>{firstLetters(userName)}</div>
                        <div className={styles.userName}>{userName}</div>
                    </>
                    : <>Not authenticated</>
                }
            </div>
        </>
    )
}

export default User;
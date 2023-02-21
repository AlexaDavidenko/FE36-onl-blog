import React, {FormEvent, useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectAuthenticated, selectUserLoginStatus, userLoginAsync} from '../user/userSlice';
import {Status} from '../util/Status.enum';
import {Loading} from '../loading/Loading';
import styles from './SignIn.module.css';

const SignIn = () => {
    const userLoginStatus = useAppSelector(selectUserLoginStatus);
    const isAuthenticated = useAppSelector(selectAuthenticated);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(userLoginAsync({email, password}));
    }

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated])

    return (
        <>
            <div className="container">
                <h1>Sign In</h1>

                <form onSubmit={onSubmit} className={styles.form}>

                    <label>
                        <span>Email</span>
                        <input type="text" name="email" placeholder="Your email"
                               value={email}
                               onChange={e => setEmail(e.target.value)}/>
                    </label>
                    <label className={styles.password}>
                        <span>Password</span>
                        <input type="password" name="password" placeholder="Your password"
                               value={password}
                               onChange={e => setPassword(e.target.value)}/>
                    </label>

                    {userLoginStatus === Status.FAILED && <p className={styles.error}>Wrong username or password</p>}

                    <div className={styles.loading}>
                        <Link to="forgot-password" className={styles.forgotPassword}>Forgot password?</Link>
                        {userLoginStatus === Status.LOADING && <div> <Loading /></div>}
                    </div>
                    <button>Sign In</button>
                    <p className={styles.signUp}>Don't have an account? <Link to="/sign-up">Sign Up</Link></p>
                </form>
            </div>
        </>
    );
};

export default SignIn;
import React, {FormEvent, useState} from 'react';
import {useAppDispatch} from '../../app/hooks';
import {userSignUpAsync} from '../user/userSlice';
import {useNavigate} from 'react-router-dom';
import styles from './SignUp.module.css';

const SignUp = () => {

    const dispatch = useAppDispatch();

    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (password === repeatPassword) {
            dispatch(userSignUpAsync({username, email, password}));
        }
    }

    return (
        <>
            <div className="container">
                <h1>Sign Up</h1>

                <form onSubmit={onSubmit} className={styles.form}>
                    <label>
                        <span>User name</span>
                        <input type="text" name="username" value={username} onChange={e => setUserName(e.target.value)}/>
                    </label>
                    <label>
                        <span>Email</span>
                        <input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    </label>
                    <label>
                        <span>Password</span>
                        <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    </label>
                    <label>
                        <span>Repeat password</span>
                        <input type="password" name="repeat-password" value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)}/>
                    </label>

                    {password !== repeatPassword && 'Passwords should match'}
                    <button>Sign Up</button>
                </form>
            </div>
        </>
    );
};

export default SignUp;
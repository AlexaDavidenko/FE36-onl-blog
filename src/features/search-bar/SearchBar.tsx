import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import styles from './SearchBar.module.css';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectSearch, setSearch} from '../blog/blogSlice';
import {FormEvent, useState} from 'react';
import {useNavigate} from 'react-router-dom';

export const SearchBar = () => {
    const search = useAppSelector(selectSearch);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [inputValue, setValue] = useState(search);

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(setSearch(inputValue));
        navigate('search');
    }

    return (
        <>
            <div className={styles.wrapper}>
                <form onSubmit={onSubmit}>
                    <input type="text" className={styles.search} value={inputValue} onChange={(e) => setValue(e.target.value)}/>
                    <button className={styles.searchButton} ><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </form>
            </div>
        </>
    )
}
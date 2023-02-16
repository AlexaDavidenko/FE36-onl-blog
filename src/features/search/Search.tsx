import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import styles from './Search.module.css';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectSearch, setSearch} from '../blog/blogSlice';
import {useState} from 'react';

export const Search = () => {
    const search = useAppSelector(selectSearch);
    const dispatch = useAppDispatch();

    const [inputValue, setValue] = useState(search);

    return (
        <>
            <div className={styles.wrapper}>
                <input type="text" className={styles.search} value={inputValue} onChange={(e) => setValue(e.target.value)}/>
                <button className={styles.searchButton} onClick={() => dispatch(setSearch(inputValue))} ><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </div>
        </>
    )
}
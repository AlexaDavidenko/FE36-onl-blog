import {Link} from 'react-router-dom';
import styles from './Paginator.module.css';
import {paginate} from '../util/Util';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';

interface IPaginator {
    currentPage: number;
    pageCount: number;
    onChange: (page: number) => void;
}
export const Paginator = ({currentPage, pageCount, onChange}: IPaginator) => {
    const onPrevClick = () => {
        onChange(currentPage - 1);
    };

    const onNextClick = () => {
        onChange(currentPage + 1);
    };

    const pagination = paginate(currentPage, pageCount) || {items: []};
    const middleButtons = pagination.items.map((item, index) => {
        if (item === -Infinity) {
            return <span key={`${item}` + index}>...</span>;
        }

        return <button key={item} onClick={() => onChange(item)} className={item === currentPage ? styles.current : ''}>{item}</button>
    });

    return (
        <>
            <div className={styles.wrapper}>
                 <button onClick={onPrevClick} className={currentPage === 1 && styles.disabled || ''}>
                    <FontAwesomeIcon icon={faArrowLeft}/> <span className={styles.prev}>Prev</span>
                </button>

                <div className={styles.middleButtons}>
                    {middleButtons}
                </div>

                <button onClick={onNextClick} className={currentPage === pageCount && styles.disabled || ''}>
                    <span className={styles.next}>Next</span> <FontAwesomeIcon icon={faArrowRight}/>
                </button>
            </div>
        </>
    )
}
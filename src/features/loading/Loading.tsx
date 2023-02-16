import styles from './Loading.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';

export const Loading = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <FontAwesomeIcon icon={faSpinner} />
            </div>
        </>
    )
}
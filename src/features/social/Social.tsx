import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF, faTwitter} from '@fortawesome/free-brands-svg-icons';
import styles from './Social.module.css';
import {Link} from 'react-router-dom';

export const Social = () => {
    const items = [
        { icon: faFacebookF, url: 'https://facebook.com'},
        { icon: faTwitter, url: 'https://twitter.com'}
    ];

    return (
        <>
            <div className={styles.wrapper}>
                <ul>
                    {items.map((item) => {
                        return <li key={item.url}>
                            <Link className={styles.item}
                               target="_blank"
                               to={item.url}>
                                <FontAwesomeIcon icon={item.icon} />
                            </Link>
                        </li>;
                    })}
                </ul>
            </div>
        </>
    )
}
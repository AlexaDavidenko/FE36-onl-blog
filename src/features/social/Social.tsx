import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF, faTwitter} from '@fortawesome/free-brands-svg-icons';
import styles from './Social.module.css';

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
                        return <li>
                            <a className={styles.item}
                               target="_blank"
                               href={item.url}>
                                <FontAwesomeIcon icon={item.icon} />
                            </a>
                        </li>;
                    })}
                </ul>
            </div>
        </>
    )
}
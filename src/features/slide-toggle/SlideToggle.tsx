import styles from './SlideToggle.module.css';

const SlideToggle = ({checked, onChange}: {checked: boolean, onChange: () => {}}) => {
    return (
        <>
            <label>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                />
                <div  className={styles.slideToggle}></div>
            </label>
        </>
    )
}

export default SlideToggle
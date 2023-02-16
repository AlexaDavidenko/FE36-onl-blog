import {FilterStatus} from '../blog/FilterStatus.enum';
import styles from './Filter.module.css';

interface IFilter {
    currentFilter: FilterStatus,
    onChange: (value: FilterStatus) => void
}
export const Filter = ({currentFilter, onChange}: IFilter) => {
    return (
        <>
            <label className={styles.item}>
                <input
                    type="radio" name="period" value={FilterStatus.DAY}
                    checked={currentFilter === FilterStatus.DAY}
                    onChange={() => onChange(FilterStatus.DAY)}
                />
                <span>Day</span>
            </label>
            <label className={styles.item}>
                <input
                    type="radio" name="period" value={FilterStatus.WEEK}
                    checked={currentFilter === FilterStatus.WEEK}
                    onChange={() => onChange(FilterStatus.WEEK)}
                />
                <span>Week</span>
            </label>
            <label className={styles.item}>
                <input
                    type="radio" name="period" value={FilterStatus.MONTH}
                    checked={currentFilter === FilterStatus.MONTH}
                    onChange={() => onChange(FilterStatus.MONTH)}
                />
                <span>Month</span>
            </label>
            <label className={styles.item}>
                <input
                    type="radio" name="period" value={FilterStatus.YEAR}
                    checked={currentFilter === FilterStatus.YEAR}
                    onChange={() => onChange(FilterStatus.YEAR)}
                />
                <span>Year</span>
            </label>
        </>
    )
}
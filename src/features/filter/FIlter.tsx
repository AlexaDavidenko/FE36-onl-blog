import {FilterStatus} from '../blog/FilterStatus.enum';
import styles from './Filter.module.css';

interface IFilter {
    currentFilter: FilterStatus,
    onChange: (value: FilterStatus) => void
}
export const Filter = ({currentFilter, onChange}: IFilter) => {
    const statuses = [
        {id: FilterStatus.DAY, text: 'Day'},
        {id: FilterStatus.WEEK, text: 'Week'},
        {id: FilterStatus.MONTH, text: 'Month'},
        {id: FilterStatus.YEAR, text: 'Year'}
    ];
    return (
        <>
            {statuses.map((status) => {
                return <label key={status.id} className={styles.item}>
                    <input
                        type="radio" name="period" value={status.id}
                        checked={currentFilter === status.id}
                        onChange={() => onChange(status.id)}
                    />
                    <span>{status.text}</span>
                </label>
            })}
        </>
    )
}
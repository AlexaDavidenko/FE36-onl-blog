import React from 'react';
import {Sort} from './Sort';
import styles from './SortBlock.module.css';

interface ISortBlock {
    currentSort: Sort,
    onChange: (sort: Sort) => void
}
const SortBlock = ({currentSort, onChange}: ISortBlock) => {
    const items = [
        {id: Sort.ASC, text: 'Title (A-Z)'},
        {id: Sort.DESC, text: 'Title (Z-A)'},
    ];

    return (
        <div className={styles.wrapper}>
            <span>Sort</span>
            <select onChange={(e) => onChange(e.target.value as Sort)}>
                {items.map(item => {
                    return <option key={item.id} value={item.id}
                                   selected={currentSort === item.id}
                                   >{item.text}</option>
                })}
            </select>
        </div>
    );
};

export default SortBlock;

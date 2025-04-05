import { useState, useEffect } from 'react';

import styles from './Tabs.module.css';

const Tabs = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(() => {
        const index = Number(localStorage.getItem('tabActiveIndex'))
        return index || 0
    });

    useEffect(() => {
        localStorage.setItem('tabActiveIndex', activeIndex)
    }, [activeIndex])

    const handleClick = (index) => {
        setActiveIndex(index);
    }

    const captionElements = items.map((item, index) =>
        <li onClick={() => handleClick(index)} key={item.title} className={
            index === activeIndex ? styles.active : ''}>
            {item.title}
        </li>)

    const contentElements = items[activeIndex].text.map((el, idx) => <p key={idx}>{el}</p>);

    return (
        <div className={styles.tabs}>

            <ul className={styles.tabs__caption} >
                {captionElements}
            </ul>

            <div className={`${styles.tabs__content} ${styles.active}`}>
                {contentElements}
            </div>

        </div>
    )
};

export default Tabs;
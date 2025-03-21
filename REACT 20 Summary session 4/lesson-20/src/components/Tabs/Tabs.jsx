import { useState, useEffect } from 'react';

import styles from './Tabs.module.css';

const Tabs = ({ items }) => {
    const [activIndex, setActiveIndex] = useState(() => {
        const index = Number(localStorage.getItem('tabActiveIndex'))
        return index || 0
    });

    useEffect(() => {
        localStorage.setItem('tabActiveIndex', activIndex)
    }, [activIndex])

    const handleClick = (index) => {
        setActiveIndex(index);
    }

    const captionElements = items.map((item, index) => <li onClick={() => handleClick(index)} key={item.title} className={
        index === activIndex ? styles.active : ''
    }>{item.title}</li>)


    return (
        <div className={styles.tabs}>

            <ul className={styles.tabs__caption} >
                {captionElements}
            </ul>

            <div className={`${styles.tabs__content} ${styles.active}`}>
                <p>{items[activIndex].text}</p>

            </div>

        </div>
    )
};

export default Tabs;
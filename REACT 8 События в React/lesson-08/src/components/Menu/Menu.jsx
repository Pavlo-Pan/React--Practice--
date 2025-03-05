import { useState } from 'react';

import styles from './Menu.module.css';

import items from './items';

const Menu = ()=> {

    const [activeIndex, setActiveIndex] = useState(0);

    const elements = items.map((item, index) => {
        console.log("Клик на ссылке")
        const fullClassName = index === activeIndex ? `${styles.link} ${styles.active}` : styles.link;
        
        return (
          <li key={item.text}>
            <a onClick={(event)=> {
              event.preventDefault();
              event.stopPropagation();
              setActiveIndex(index);
            }} href={item.href} className={fullClassName}>
              {item.text}
            </a>
          </li>
        );
      });
    
      const handleMenuClick = ()=> {
        console.log("Клик по меню")
      }
    

    return (
        <ul onClick={handleMenuClick} className={styles.menu}>{elements}</ul>
    )
};

export default Menu;
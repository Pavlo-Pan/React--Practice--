
import headerMenuItems from "./headerMenuItems";

import styles from './HeaderMenu.module.css'

const HeaderMenu = () => {

    const elements = headerMenuItems.map(({ href, text }) =>
        <a className={styles.link} key={text} href={href}> {text}</a>)
    return (
        <nav >
            {elements}
        </nav>
    )
};

export default HeaderMenu;
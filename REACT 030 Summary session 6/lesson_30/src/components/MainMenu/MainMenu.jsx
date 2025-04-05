import { NavLink } from 'react-router-dom';

import styles from './MainMenu.module.css';

const MainMenu = () => {
    return (
        <ul className={styles.menu}>
            <li>
                <NavLink to="/" className={styles.link}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/posts" className={styles.link}>Posts</NavLink>
            </li>
            <li>
                <NavLink to="/contacts" className={styles.link}>Contacts</NavLink>
            </li>
        </ul>
    )
};

export default MainMenu;
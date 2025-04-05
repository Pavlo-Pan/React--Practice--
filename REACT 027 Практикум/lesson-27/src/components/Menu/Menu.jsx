
import { NavLink } from "react-router-dom";

import styles from './Menu.module.css';

const Menu = () => {
    return (
        <ul className={styles.ul}>
            <li>
                <NavLink className={styles.nav} to="/">Home</NavLink>
            </li>
            <li>
                <NavLink className={styles.nav} to="/products">Products</NavLink>
            </li>
            <li>
                <NavLink className={styles.nav} to="/products-partners">Products from partners</NavLink>
            </li>
            <li>
                <NavLink className={styles.nav} to="/contacts">Contacts</NavLink>
            </li>
        </ul>
    )
};

export default Menu;
import { useContext } from 'react';

import { themeContext } from '../../context/ThemeProvider';

import styles from './Button.module.css';

const Button = ({ children }) => {

    const {theme} = useContext(themeContext);

    return (
        <button className={`${styles.btn} ${styles[theme]}`}>{children}</button>
    )
};

export default Button;
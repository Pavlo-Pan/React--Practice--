import { useContext } from 'react';

import { themeContext } from '../../context/ThemeProvider';

// import styles from './ThemeSwitcher.module.css';

import items from './items';

const ThemeSwitcher = ()=> {
    const {theme, toggleTheme} = useContext(themeContext);

    const transformItems = theme === "light" ? items : [...items].reverse();

    const elements = transformItems.map(item => <option key={item.value} value={item.value}>{item.text}</option>)

    return (
        <select defaultValue={theme} onChange={toggleTheme} name="theme-switcher">
            {elements}
        </select>
    )
}

export default ThemeSwitcher;

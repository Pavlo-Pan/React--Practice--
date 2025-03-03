import classNames from "classnames";
import PropTypes from "prop-types";

import ThemeSwitcher from "../../ui/ThemeSwitcher";

import style from "./Header.module.sass";

const Header = ({toggleTheme, theme}) => {
    return (
        <header className={classNames(`header--${theme}`, "header", style.header)}>
            <h2>ThemeSwitcher:</h2>
            <ThemeSwitcher toggleTheme={toggleTheme} theme={theme} />
        </header>

    )
};

Header.PropTypes = {
    toggleTheme: PropTypes.func.isRequired,
    theme: PropTypes.string.isRequired
};

export default Header;
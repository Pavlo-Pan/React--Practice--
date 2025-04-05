import PropTypes from "prop-types";
import classNames from "classnames";

import style from "./Footer.module.sass";

const Footer = ({ theme }) => {
    return (
        <footer className={classNames(`footer--${theme}`, style.footer)}>
            <p>CopyRight 2005 - Все права защищены</p>
        </footer>
    )
};

Footer.propTypes = {
    theme: PropTypes.string.isRequired
}

export default Footer;
// Импортируем библиотеку `classnames` для удобной работы с классами
import classNames from "classnames";

// Импортируем библиотеку PropTypes для проверки типов пропсов
import PropTypes from "prop-types";

// Импортируем стили, написанные в SASS-модуле
import style from './ThemeSwitcher.module.sass';


const ThemeSwitcher = ({ toggleTheme, theme }) => {

    return (

        <button className={classNames(
            'button-toggle',  // Базовый класс кнопки
            `button-toggle--${theme}`,  // Динамический класс для темы (`button-toggle--light` или `button-toggle--dark`)
            style.buttonToggle  // Подключение стиля из SASS-модуля (локальный стиль)
        )}
        onClick={toggleTheme}  // При клике вызываем функцию `toggleTheme`
        >Сменить тему</button>

        // <button className={`button-toggle  button-toggle--${theme}`} onClick={toggleTheme}>Сменить тему</button>
    );
};


// Проверка пропсов с помощью PropTypes
ThemeSwitcher.PropTypes = {
    toggleTheme: PropTypes.func.isRequired,  // `toggleTheme` — обязательно должен быть функцией
    theme: PropTypes.string.isRequired  // `theme` — обязательно должна быть строкой (`"light"` или `"dark"`)
};


// Экспортируем компонент `ThemeSwitcher` для использования в других файлах
export default ThemeSwitcher;
import classNames from "classnames";
import PropTypes from "prop-types";

import style from "./MainContent.module.sass";

const MainContent = ({ theme }) => {
    return (
        <main className={classNames('main ', `main--${theme}`, style.main)}>
            <h3>First paragraf</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ullam maiores minima quo cum! Officiis quam error repellat cum ducimus obcaecati fugiat sapiente enim. Maiores pariatur aut aperiam sunt perspiciatis.</p>
            <h3>Second paragraf</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quasi modi perferendis, maxime neque quo ut quas aliquam dolore deserunt harum labore dignissimos fuga ratione, enim suscipit maiores veritatis id ad beatae voluptate illum rerum illo. Veritatis culpa reprehenderit accusamus nesciunt dignissimos voluptatum sunt, illum ducimus officiis dolore eos cupiditate!</p>
            <h3>Third paragraf</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore error sed cumque enim tempore. Reiciendis architecto nemo voluptatum esse exercitationem!</p>
        </main>
    )
};

MainContent.PropTypes = {
    theme: PropTypes.string.isRequired
};

export default MainContent;
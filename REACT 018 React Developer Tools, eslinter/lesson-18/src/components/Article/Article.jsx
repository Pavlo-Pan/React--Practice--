import { useContext } from 'react';
import { blogSettingsContext } from '../../context/BlogSettingsProvider';

// import styles from './Article.module.css';

const Article = ({ data }) => {

    const { settings } = useContext(blogSettingsContext);
    const { fontSize, lineHeight } = settings;

    const elements = data.map(element => <p style={{ fontSize, lineHeight }} key={element}>{element}</p>)
    return (
        <div>
            {elements}
        </div>
    )
};

export default Article;

import styles from './PostList.module.css';

const PostList = ({ items = [] }) => {

    const elements = items.map(item => (
        <li key={item.id} className={styles.postCard}>
            <p className={styles.title}>{item.title}</p>
            <p>{item.body}</p>
        </li>
    ))

    return (
        <ul className={styles.container}>{elements}</ul>
    )
};

export default PostList;
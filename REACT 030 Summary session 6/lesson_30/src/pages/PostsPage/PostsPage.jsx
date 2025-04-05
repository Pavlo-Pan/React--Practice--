
import PostsSearch from "../../components/PostsSearch/PostsSearch";

import styles from "./PostsPage.module.css";

const PostsPage = () => {
    return (
        <main>
            <h1 className={styles.title}>PostsPage</h1>
            <PostsSearch />
        </main>
    )
};

export default PostsPage;
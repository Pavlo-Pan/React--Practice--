import { Link } from "react-router-dom";

import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
    return (
        <main>
            <h1 className={styles.title}>Not found page</h1>
            <Link to="/" className={styles.link}>To main page</Link>
        </main>
    )
};

export default NotFoundPage;
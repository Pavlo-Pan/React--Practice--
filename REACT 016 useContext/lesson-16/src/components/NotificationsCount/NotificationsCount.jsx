

import styles from './NotificationsCount.module.css';

const NotificationsCount = () => {
    return (
        <div>
            У вас <span className={styles.count}>{items.length}</span> новых сообщений
        </div>
    )
};

export default NotificationsCount;
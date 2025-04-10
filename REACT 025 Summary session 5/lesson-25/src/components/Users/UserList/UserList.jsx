

import styles from './UserList.module.css';

const UserList = ({ items = [], onDeleteUser }) => {
    const elements = items.map(({ id, username, email }) => (
        <li key={id} className={styles.item}>
            Username: {username}. Email: {email}.
            <button onClick={() => onDeleteUser(id)} className={styles.btn}>Delete</button>
        </li>
    ));

    return (
        <>
            <h3 className={styles.title}>User List</h3>
            <ul>{elements}</ul>
        </>

    )
};

export default UserList;
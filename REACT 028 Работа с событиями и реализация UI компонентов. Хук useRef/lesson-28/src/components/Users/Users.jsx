import { useState, useEffect } from "react";

import FormAddUser from "./FormAddUser/FormAddUser";
import UserList from "./UserList/UserList";

import { getUsers, addUser, deleteUser } from "../../api/users";

import styles from './Users.module.css';

const Users = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const data = await getUsers();
            setUsers(data);
        } catch (error) {
            setError(error.message);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    const onAddUser = async ({repeatPassword: _, ...newUser}) => {
        try {
            setLoading(true);
            const data = await addUser(newUser);
            setUsers(prevUsers => [...prevUsers, data]);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    const onDeleteUser = async id => {
        try {
            setLoading(true);
            await deleteUser(id);
            setUsers(prevUsers => prevUsers.filter(item => item.id !== id));
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className={styles.wrapper}>
            <div>
                <FormAddUser onAddUser={onAddUser} />
                {loading && <p>Add user request...</p>}
                {error && <p>Add user error: {error}</p>}
            </div>
            <div>
                <UserList items={users} onDeleteUser={onDeleteUser} />
                {loading && <p>User List loading...</p>}
                {error && <p>User List error: {error}</p>}
            </div>
        </div>
    )
};

export default Users;
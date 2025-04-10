import { useSelector, useDispatch } from 'react-redux';

import { logoutUserInStore } from '../../redux/actionCreators';

import styles from './UserProfile.module.css';

const UserProfile = () => {

    const user = useSelector(store => store.user);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logoutUserInStore())
    }

    return (
        <div>
            <h2>User Profile</h2>
            <p>Welcome, {user.username}</p>
            <button onClick={logout} type="button">Logout</button>
        </div>
    )
};

export default UserProfile;
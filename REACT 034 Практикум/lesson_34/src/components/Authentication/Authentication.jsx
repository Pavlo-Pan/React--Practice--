import { useSelector, useDispatch } from 'react-redux';

import LoginForm from '../LoginForm/LoginForm';
import UserProfile from '../UserProfile/UserProfile';

import { loginUserInStore } from '../../redux/actionCreators';

import styles from './Authentication.module.css';
import store from '../../redux/store';

const Authentication = () => {

    const isAuthenticated = useSelector(store => store.isAuthenticated);
    const dispatch = useDispatch();

    const onLogin = (data) => {
        dispatch(loginUserInStore(data));
    }

    return (
        <main>
            <h2>Authentication APP</h2>
            {isAuthenticated ? <UserProfile /> : <LoginForm submitForm={onLogin} />}
        </main>
    )
};

export default Authentication;
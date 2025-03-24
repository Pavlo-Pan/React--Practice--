

const UserProfile = ({login, email, logoutUser})=> {

    return (
        <div>
            <p>Login: {login}</p>
            <p>Email: {email}</p>
            <button onClick={logoutUser}>Выйти</button>
        </div>
    );
};

export default UserProfile;
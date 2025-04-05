

const UserInfo = ({ userInfo }) => {

    const { email, username, password } = userInfo;

    return (
        <div>
            <p>Email: {email}</p>
            <p>Имя: {username}</p>
            <p>Пароль: {password}</p>
        </div>
    )
};

export default UserInfo;
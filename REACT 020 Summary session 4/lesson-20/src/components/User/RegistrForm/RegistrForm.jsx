import { useState, useEffect } from "react";

import initialState from "../../../data/initialState";

const RegistrForm = ({ onSubmit }) => {

    const [userInfo, setUserInfo] = useState(() => {
        return JSON.parse(localStorage.getItem('userInfo')) || { ...initialState }
    });

    useEffect(() => {
        localStorage.setItem('userInfo', JSON.stringify(userInfo))
    }, [userInfo])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserInfo(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(userInfo);
        setUserInfo({ ...initialState });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email"></label>
                <input onChange={handleChange} value={userInfo.email} name="email" type="email" id="email" placeholder="Email" />
            </div>
            <div>
                <label htmlFor="username"></label>
                <input onChange={handleChange} value={userInfo.username} name="username" type="text" id="username" placeholder="Имя" />
            </div>
            <div>
                <label htmlFor="password"></label>
                <input onChange={handleChange} value={userInfo.password} name="password" type="password" id="password" placeholder="Пароль" />
            </div>
            <button type="submit">Зарегистрироваться</button>
        </form>
    );
};

export default RegistrForm;
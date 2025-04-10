import { useState, useEffect } from "react";

import UserInfo from "./UserInfo/UserInfo";
import RegistrForm from "./RegistrForm/RegistrForm";

import initialState from "../../data/initialState";


const User = () => {

    const [userInfo, setUserInfo] = useState(() => {
        return JSON.parse(localStorage.getItem('userGetInfo')) || { ...initialState }
    });

    useEffect(() => {
        localStorage.setItem('userGetInfo', JSON.stringify(userInfo))
    }, [userInfo])

    const getUserInfo = (newUserInfo) => {
        setUserInfo({ ...newUserInfo })
    }

    return (

        <div>
            <RegistrForm onSubmit={getUserInfo} />
            <UserInfo userInfo={userInfo} />
        </div>
    )
};

export default User;
import { LOGIN, LOGOUT } from "./types";

export const loginUserInStore = (payload)=>{
    return {
        type: LOGIN,
        payload,
    }
};

export const logoutUserInStore = ()=>{
    return {
        type: LOGOUT,
    }
};
import { createContext, useState } from "react";

export const userContext = createContext();

const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [isRegistered, setIsRegistered] = useState(false);

    const loginUser = (data) => {
        setUser(data)
        setIsRegistered(true);
    }

    const logoutUser =()=>{
        setIsRegistered(false);
        setUser({})
    }

    return (
        <userContext.Provider value={{ user, isRegistered, loginUser, logoutUser }}>
            {children}
        </userContext.Provider>
    )

};

export default UserContextProvider;
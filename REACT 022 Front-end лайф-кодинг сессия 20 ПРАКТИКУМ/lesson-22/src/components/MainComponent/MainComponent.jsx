import { useContext } from "react";
import { userContext } from '../../context/UserContextProvider';

import RegistrationForm from "../RegistrationForm/RegistrationForm";
import UserProfile from "../UserProfile/UserProfile";

const MainComponent = () => {

    const { isRegistered, loginUser, user, logoutUser } = useContext(userContext);

    console.log(isRegistered);


    return (
        <div>
            {isRegistered && <UserProfile {...user} logoutUser={logoutUser}/>}
            {!isRegistered && <RegistrationForm loginUser={loginUser} />}
           
        </div>
    )
};

export default MainComponent;
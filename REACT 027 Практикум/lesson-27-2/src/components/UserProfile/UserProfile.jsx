import { useParams, useNavigate } from "react-router-dom";

import { users } from "../../data/users";

const UserProfile = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const user = users.find(item => item.id === Number(id));
    if (!user) {
        return <div>User not found</div>;
    }

    const goBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <div>
                User {user.name}, age {user.age}
            </div>
            <button onClick={goBack}>Back</button>
        </div>
    )
};

export default UserProfile;
import { Link } from "react-router-dom";

import { users } from "../../data/users";

const Users = ()=> {
    const elements = users.map(item => (
        <li key={item.id}>
            <Link to={`/users/${item.id}`}>{item.name}</Link>
        </li>
    ))
    return (
        <ul>{elements}</ul>
    )
};

export default Users;
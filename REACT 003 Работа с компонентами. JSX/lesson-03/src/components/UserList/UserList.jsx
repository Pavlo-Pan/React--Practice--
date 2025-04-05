
import './UserList.css';

const userItems = ["User 1", "User 2", "User 3", "User 4", "User 5"];

const UserList = () => {
  const elements = userItems.map((item) => <li key={item}>{item}</li>);

  return (
    <>
      <h3>User list</h3>
      <ul>{elements}</ul>
    </>
  );
};

export default UserList;
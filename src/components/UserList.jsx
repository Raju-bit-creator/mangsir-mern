import React from "react";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const navigate = useNavigate();
  const users = [
    { id: 1, name: "Jhon" },
    { id: 2, name: "Ramesh" },
    { id: 3, name: "Ram" },
    { id: 4, name: "Sanjaya" },
  ];
  const handleUser = (userId, userName) => {
    navigate(`/${userId}/${userName}`);
  };
  return (
    <div className=" container mt-5">
      <h4>User List</h4>
      <ul className="user-list">
        {users.map((user) => {
          return (
            <li onClick={() => handleUser(user.id, user.name)} key={user.id}>
              {user.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;

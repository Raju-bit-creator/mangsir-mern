import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const params = useParams();
  const { userId, userName } = params;
  return (
    <div className="container mt-5">
      <h4>User profile</h4>
      <ul>
        <li>user id : {userId}</li>
        <li>user name: {userName}</li>
      </ul>
    </div>
  );
};

export default User;

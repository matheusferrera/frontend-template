import React from "react";
import UserService from "../services/user.service";
import AuthService from "../services/auth.service";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  const currentAuthUser = UserService.getAuthUser();
  console.log({ currentUser });
  console.log({ currentAuthUser });

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentAuthUser.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentUser.access_token.substring(0, 20)} ...{" "}
        {currentUser.access_token.substr(currentUser.access_token.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentAuthUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentAuthUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>{currentUser.roles && currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}</ul>
    </div>
  );
};

export default Profile;

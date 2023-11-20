import React from "react";
import { useAuth } from "../contexts/AuthContext";

const Profile = () => {
  const { user, token: access_token } = useAuth();

  return (
    <div>
      <h2>Profile</h2>
      {user ? (
        <div className="container">
          <header className="jumbotron">
            <h3>
              <strong>{user.username}</strong> Profile
            </h3>
          </header>
          <p>
            <strong>Token:</strong> {access_token.substring(0, 20)} ... {access_token.substr(access_token.length - 20)}
          </p>
          <p>
            <strong>Id:</strong> {user.id}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <strong>Authorities:</strong>
          <ul>{user.roles && user.roles.map((role, index) => <li key={index}>{role}</li>)}</ul>
        </div>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
};

export default Profile;

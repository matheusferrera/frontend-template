import React, { useEffect, useMemo } from "react";

import { useAuth } from "../contexts/AuthContext";

const Profile = () => {
  const { user, token, getAuthUser } = useAuth();

  // Memoize the getAuthUser function
  const memoizedGetAuthUser = useMemo(() => getAuthUser, [getAuthUser, user]);

  // // Fetch authenticated user information when the component mounts
  useEffect(() => {
    if (token) {
      memoizedGetAuthUser(token).catch(error => {
        console.error("Error fetching authenticated user in Profile:", error);
      });
    }
  }, [token, memoizedGetAuthUser]);

  return (
    <div>
      <h2>Profile</h2>
      {user ? (
        <div className="container">
          <header className="jumbotron">
            <h3>
              Usuário: <strong>{user.username}</strong>
            </h3>
          </header>
          <p>
            <strong>Token:</strong> {token.substring(0, 20)} ... {token.substr(token.length - 20)}
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

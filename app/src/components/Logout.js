import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Logout = () => {
  const navigate = useNavigate();
  const { token: access_token, logout } = useAuth();

  useEffect(() => {
    logout(access_token);
    navigate("/login");
  }, [logout]);

  return (
    <div>
      <p>Logging out...</p>
    </div>
  );
};

export default Logout;

import React from "react";
import { useNavigate } from "react-router-dom";

import MenuItem from "@mui/material/MenuItem";

import { useAuth } from "../contexts/AuthContext";

// const OldLogout = () => {
//   const navigate = useNavigate();
//   const { token, logout } = useAuth();

//   useEffect(() => {
//     logout(token);
//     navigate("/login");
//   }, [logout]);

//   return (
//     <div>
//       <p>Logging out...</p>
//     </div>
//   );
// };

const Logout = () => {
  const navigate = useNavigate();
  const { token, logout } = useAuth();

  const onClick = () => {
    logout(token);
    navigate("/login");
  };

  return (
    <MenuItem
      disableRipple
      disableTouchRipple
      onClick={onClick}
      sx={{ typography: "body2", color: "error.main", py: 1.5 }}
    >
      Logout
    </MenuItem>
  );
};

export default Logout;

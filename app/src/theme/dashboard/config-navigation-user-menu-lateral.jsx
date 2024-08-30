/* eslint-disable react/react-in-jsx-scope */
// config-navigation-admin-menu-lateral.js
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HelpIcon from "@mui/icons-material/Help";
import MapIcon from "@mui/icons-material/Map";

// Menu items for desktop
export const MenuItems = [
  { text: "Mapa", icon: <MapIcon />, url: "/home" },
  { text: "Duvidas gerais", icon: <HelpIcon />, url: "/faq" },
  { text: "Configurações de conta", icon: <AccountCircleIcon />, url: "/profile" },
];

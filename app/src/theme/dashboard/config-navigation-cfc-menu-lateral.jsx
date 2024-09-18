/* eslint-disable react/react-in-jsx-scope */
// config-navigation-admin-menu-lateral.js
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoneyIcon from "@mui/icons-material/AttachMoney";
import HomeIcon from "@mui/icons-material/Home";
import MapIcon from "@mui/icons-material/Map";

// Menu items for desktop
export const MenuItemsCfc = [
  { text: "Home", icon: <MapIcon />, url: "/" },
  { text: "Duvidas gerais", icon: <HomeIcon />, url: "/faq" },
  { text: "Crédito", icon: <MoneyIcon />, url: "/credito" },
  { text: "Configurações de conta", icon: <AccountCircleIcon />, url: "/profile" },
];

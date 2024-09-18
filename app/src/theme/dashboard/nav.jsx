/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

import { useAuth } from "../../contexts/AuthContext";
import { usePathname } from "../../hooks/use-pathname";
import { useResponsive } from "../../hooks/use-responsive";
import { themeProvider } from "../../theme/index";
import { HEADER } from "./config-layout";
import { MenuItemsAdm } from "./config-navigation-admin-menu-lateral";
import { MenuItemsCfc } from "./config-navigation-cfc-menu-lateral";
import { MenuItems } from "./config-navigation-user-menu-lateral";

function NavItem({ text, icon, url }) {
  const navigate = useNavigate();
  const pathname = usePathname();
  const theme = useTheme();

  const handleClick = () => {
    navigate(url);
  };

  const selected = pathname === url;

  return (
    <ListItem
      disablePadding
      style={{
        borderRight: selected ? `3px solid ${theme.palette.primary.main}` : "none",
        transition: "1s",
      }}
    >
      <ListItemButton
        onClick={handleClick}
        style={{ padding: "14px 8px 14px 16px" }}
        selected={selected}
      >
        <ListItemIcon style={{ color: selected ? theme.palette.primary.main : "inherit", transition: "1s" }}>{icon}</ListItemIcon>
        <a style={{ color: selected ? theme.palette.primary.main : "inherit", transition: "1s", fontWeight: selected ? "600" : "inherit" }}>
          {text}
        </a>
      </ListItemButton>
    </ListItem>
  );
}

export default function Nav({ openNav, onCloseNav }) {
  const pathname = usePathname();
  const lgUp = useResponsive("up", "lg");
  const theme = useTheme();
  const { toggleMode } = themeProvider();

  const { logout, token, user } = useAuth();

  const perfilUser = user?.tipouser;

  const [renderNavContent, setRenderNavContent] = useState([]);

  useEffect(() => {
    console.log("PERFIL USER -> ", perfilUser);
    switch (perfilUser) {
      case 3:
        setRenderNavContent(MenuItemsAdm);
        break;
      case 2:
        setRenderNavContent(MenuItemsCfc);
        break;
      case 1:
        setRenderNavContent(MenuItems);
        break;
    }
  }, [perfilUser]);

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
  }, [pathname]);

  return lgUp ? (
    //=================
    // MENU PARA DESKTOP
    //=================
    <Box
      sx={{ width: 250 }}
      role="presentation"
      style={{
        backgroundColor: theme.palette.background.default,
        marginTop: `${HEADER.H_DESKTOP}px`,
        paddingTop: "0px",
        position: "fixed",
        boxShadow: "0px 6px 6px 0px rgba(51, 51, 51, 0.16)",
        height: `100vh`,
      }}
    >
      <List>
        {renderNavContent.map(item => (
          <NavItem
            key={item.text}
            text={item.text}
            icon={item.icon}
            url={item.url}
          />
        ))}
      </List>
    </Box>
  ) : (
    //=================
    // MENU PARA MOBILE
    //=================
    <Drawer
      open={openNav}
      onClose={onCloseNav}
    >
      <Box
        sx={{ width: 250 }}
        role="presentation"
        style={{ backgroundColor: theme.palette.background.default }}
      >
        <List>
          {renderNavContent.map(item => (
            <NavItem
              key={item.text}
              text={item.text}
              icon={item.icon}
              url={item.url}
            />
          ))}
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
}

Nav.propTypes = {
  openNav: PropTypes.bool.isRequired,
  onCloseNav: PropTypes.func.isRequired,
};

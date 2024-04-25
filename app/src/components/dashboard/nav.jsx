import React, { useEffect, useState } from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ListItemButton from "@mui/material/ListItemButton";
import Stack from "@mui/material/Stack";
import { alpha } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

import { usePathname } from "../../hooks/use-pathname";
import { useResponsive } from "../../hooks/use-responsive";
import Scrollbar from "../scrollbar";
import { HEADER, NAV } from "./config-layout";
import { adminNavConfig, cidadaoNavConfig, defaultNavConfig, parceiroNavConfig } from "./config-navigation-menu-lateral";
import RouterLink from "./router-link";

// ----------------------------------------------------------------------

export default function Nav({ openNav, onCloseNav }) {
  const pathname = usePathname();
  const upLg = useResponsive("up", "lg");

  const theme = useTheme();

  const user = JSON.parse(localStorage.getItem("user"));
  const perfilUser = user?.ds_perfil_sso?.substring(2, user.ds_perfil_sso.length - 2);
  const [renderNavContent, setRenderNavContent] = useState([]);

  useEffect(() => {
    switch (perfilUser) {
      case "Servidor":
        setRenderNavContent(adminNavConfig);
        break;
      case "Parceiro":
        setRenderNavContent(parceiroNavConfig);
        break;
      case "Trabalhador":
        setRenderNavContent(cidadaoNavConfig);
        break;
      default:
        setRenderNavContent(defaultNavConfig);
        break;
    }
  }, [perfilUser]);

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line
    // react-hooks/exhaustive-deps
  }, [pathname]);

  const renderMenu = (
    <Stack component="nav">
      {renderNavContent.map(item => (
        <NavItem
          key={item.title}
          item={item}
        />
      ))}
    </Stack>
  );

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        marginTop: `${HEADER.H_DESKTOP}px`,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      {renderMenu}

      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.WIDTH },
        bgcolor: theme.palette.text.secondary,
        transition: "1s",
      }}
    >
      {upLg ? (
        <Box
          sx={{
            height: 1,
            position: "fixed",
            width: NAV.WIDTH,
            borderRight: theme.palette.border.layout,
            boxShadow: "1px 0px 10px 1px #0000001A",
            paddingBottom: "40px",
            transition: "1s",
          }}
        >
          {renderContent}
        </Box>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.WIDTH,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

// ----------------------------------------------------------------------

function NavItem({ item }) {
  const pathname = usePathname();
  const theme = useTheme();
  let active = "";
  let objRoute = {};
  if (item.subTitles) {
    for (let subTitle in item.subTitles) {
      if (item.subTitles[subTitle] === pathname) {
        active = subTitle;
        objRoute = item;
        break;
      }
    }
  } else {
    active = item.path === pathname;
  }

  return (
    <ListItemButton
      sx={{
        typography: "body2",
        color: theme.palette.primary.main,
        textTransform: "capitalize",
        fontWeight: "fontWeightSmall",
        transition: "1s",
        p: 0,
        borderRadius: "0px",
        ...(!item.subTitles && {
          "&:hover": {
            bgcolor: theme => alpha(theme.palette.primary.dark, 0.6),
            color: theme.palette.text.secondary,
          },
          ...(active && {
            color: theme.palette.text.secondary,
            fontWeight: "fontWeightSemiBold",
            bgcolor: theme => alpha(theme.palette.primary.dark, 1),
            "&:hover": {
              bgcolor: theme => alpha(theme.palette.primary.dark, 0.6),
            },
          }),
        }),
      }}
    >
      {item.subTitles ? (
        <React.Fragment key={item.title}>
          <Accordion
            style={{ borderRadius: "0px" }}
            sx={{
              typography: "body2",
              color: theme.palette.mode == "dark" ? theme.palette.text.primary : theme.palette.primary.main,
              borderBottom: "1px solid #d3d3d3",
              fontFamily: "Rawline Regular",
              textTransform: "capitalize",
              fontWeight: "fontWeightSmall",
              transition: "1s",
              bgcolor: "transparent",
              width: "100%",
              ...(objRoute.title == item.title && {
                color: theme.palette.text.secondary,
                fontFamily: "Rawline Bold",
                bgcolor: theme => alpha(theme.palette.primary.dark, 1),
                border: "1px solid " + theme.palette.primary.dark,
              }),
            }}
          >
            <AccordionSummary
              expandIcon={
                <KeyboardArrowDownIcon
                  style={{
                    color:
                      theme.palette.mode == "dark"
                        ? objRoute.title == item.title
                          ? theme.palette.text.secondary
                          : theme.palette.text.primary
                        : objRoute.title == item.title
                          ? theme.palette.text.secondary
                          : theme.palette.primary.main,
                  }}
                />
              }
              sx={{ bgcolor: "transparent", p: 3, width: "100%", margin: 0, height: 32 }}
            >
              {item.title}
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "transparent",
                p: "0",
                width: "100%",
                marginTop: "-15px",
                marginBottom: "10px",
              }}
            >
              {Object.entries(item.subTitles).map(([title]) => (
                <div key={"div_" + title}>
                  <Box
                    component={RouterLink}
                    href={item.subTitles[title]}
                    sx={{
                      textDecoration: "none",
                      p: 4,
                      display: "flex",
                      paddingTop: "5px",
                      paddingBottom: "5px",
                      alignItems: "center",
                      width: "100%",
                      transition: "1s",
                      fontFamily: "Rawline Regular",
                      "&:hover": {
                        bgcolor: theme => alpha(theme.palette.primary.dark, 0.6),
                        color: theme.palette.text.secondary,
                      },
                      color: theme.palette.text.primary,
                      ...(objRoute.title == item.title && {
                        color: theme.palette.text.secondary,
                      }),
                      ...(active == title && {
                        color: theme.palette.primary.dark,
                        bgcolor: theme.palette.text.secondary,
                      }),
                    }}
                  >
                    {title}
                  </Box>
                </div>
              ))}
            </AccordionDetails>
          </Accordion>
        </React.Fragment>
      ) : (
        <Box
          component="span"
          sx={{ justifyContent: "space-between", display: "flex", width: "100%", p: 1 }}
        >
          {item.title}
        </Box>
      )}
    </ListItemButton>
  );
}

NavItem.propTypes = {
  item: PropTypes.object,
};

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
        bgcolor: "white",
      }}
    >
      {upLg ? (
        <Box
          sx={{
            height: 1,
            position: "fixed",
            width: NAV.WIDTH,
            borderRight: theme => `dashed 1px ${theme.palette.divider}`,
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

  let active = "";
  if (item.subTitles) {
    for (let subTitle in item.subTitles) {
      if (item.subTitles[subTitle] === pathname) {
        active = subTitle;
        break;
      }
    }
  } else {
    active = item.path === pathname;
  }

  return (
    <ListItemButton
      sx={{
        minHeight: 56,
        typography: "body2",
        color: "#1351B4",
        textTransform: "capitalize",
        fontWeight: "fontWeightSmall",
        transition: "1s",
        p: 0,
        ...(!item.subTitles && {
          "&:hover": {
            bgcolor: theme => alpha(theme.palette.primary.dark, 0.6),
            color: "white",
          },
          ...(active && {
            color: "white",
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
            sx={{
              typography: "body2",
              color: "#1351B4",
              textTransform: "capitalize",
              fontWeight: "fontWeightSmall",
              transition: "1s",
              bgcolor: "transparent",
              width: "100%",
            }}
          >
            <AccordionSummary
              expandIcon={<KeyboardArrowDownIcon style={{ color: "#1351B4" }} />}
              sx={{ bgcolor: "transparent", p: 1, width: "100%", margin: 0 }}
            >
              {item.title}
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "transparent",
                p: "0",
                width: "100%",
              }}
            >
              {Object.entries(item.subTitles).map(([title]) => (
                <div key={"div_" + title}>
                  <Box
                    component={RouterLink}
                    href={item.subTitles[title]}
                    sx={{
                      textDecoration: "none",
                      color: "inherit",
                      p: 1,
                      display: "flex",
                      minHeight: 56,
                      alignItems: "center",
                      width: "100%",
                      transition: "1s",
                      paddingTop: "0px",
                      paddingBottom: "0px",
                      marginBottom: "0px",
                      "&:hover": {
                        bgcolor: theme => alpha(theme.palette.primary.dark, 0.6),
                        color: "white",
                      },
                      ...(active == title && {
                        color: "white",
                        fontWeight: "fontWeightSemiBold",
                        bgcolor: theme => alpha(theme.palette.primary.dark, 1),
                        "&:hover": {
                          bgcolor: theme => alpha(theme.palette.primary.dark, 0.6),
                        },
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

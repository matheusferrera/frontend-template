import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Popover from "@mui/material/Popover";
import { alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import { useAuth } from "../../contexts/AuthContext";
import Logout from "../Logout";

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: "Home",
    icon: "eva:home-fill",
    path: "/",
  },
  {
    label: "Profile",
    icon: "eva:person-fill",
    path: "/profile",
  },
  {
    label: "Settings",
    icon: "eva:settings-2-fill",
    path: "/settings",
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(null);
  const { user } = useAuth();

  const account = {
    displayName: user?.name,
    email: user?.email,
    photoURL: user?.photo_path,
    role: user?.role,
  };

  const handleOpen = event => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleClick = path => {
    navigate(path);
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          width: 40,
          height: 40,
          background: theme => alpha(theme.palette.grey[500], 0.08),
          ...(open && {
            background: theme => `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
          }),
        }}
      >
        <Avatar
          src={account.photoURL}
          alt={account.displayName}
          sx={{
            width: 36,
            height: 36,
            border: theme => `solid 2px ${theme.palette.background.default}`,
          }}
        >
          {account.displayName ? account.displayName.charAt(0).toUpperCase() : ""}
        </Avatar>
      </IconButton>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1,
            ml: 0.75,
            width: 200,
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2 }}>
          <Typography
            variant="subtitle2"
            noWrap
          >
            {account.displayName}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            noWrap
          >
            {account.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        {MENU_OPTIONS.map(option => (
          <MenuItem
            key={option.label}
            onClick={() => handleClick(option.path)}
          >
            {option.label}
          </MenuItem>
        ))}

        <Divider sx={{ borderStyle: "dashed", m: 0 }} />

        <Logout />
      </Popover>
    </>
  );
}

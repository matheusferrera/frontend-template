import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from "@mui/material";
import PropTypes from "prop-types";

const CustomModal = ({ showModal, handleClose, title, content, buttons }) => {
  return (
    <Dialog
      maxWidth="md"
      onClose={handleClose}
      open={showModal}
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>{title}</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: theme => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>

      {/* <DialogContent dividers>{dangerousContent ? <div dangerouslySetInnerHTML={{ __html: dangerousContent }} /> : content}</DialogContent> */}

      <DialogContent dividers>{content}</DialogContent>

      <DialogActions sx={{ justifyContent: "center" }}>
        {buttons.map((button, index) => (
          <Button
            key={index}
            onClick={button.onClick}
          >
            {button.label}
          </Button>
        ))}
      </DialogActions>
    </Dialog>
  );
};

CustomModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  buttons: PropTypes.array.isRequired,
};

export default CustomModal;

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface ModalContainerProps {
  isOpen: boolean;
  onClose: () => void;
  size: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const ModalContainer: React.FC<ModalContainerProps> = ({
  isOpen,
  onClose,
  children,
  size,
}) => {
  return (
    <Dialog
      maxWidth={size}
      fullWidth
      open={isOpen}
      sx={{
        height: {
          xs: "110vh",
          md: "120vh",
          sm: "120vh"
        },
      }}
      onClose={onClose}
    >
      <DialogActions
        sx={{
          justifyContent: "flex-start",
        }}
      >
        <IconButton

          color="inherit"
          onClick={onClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </DialogActions>
      <DialogContent
        sx={{
          height: {
            xs: "110vh",
            md: "120vh",
            sm: "120vh"
          },
        }}
      >{children}</DialogContent>
    </Dialog>
  );
};

export default ModalContainer;

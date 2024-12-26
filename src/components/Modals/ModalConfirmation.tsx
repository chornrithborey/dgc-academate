import React from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface ModalConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  size: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const ModalConfirmation: React.FC<ModalConfirmationProps> = ({
  isOpen,
  onClose,
  children,
  size,
}) => {
  return (
    <Dialog open={isOpen} sx={{}} onClose={onClose}>
      <DialogContent sx={{}}>{children}</DialogContent>
    </Dialog>
  );
};

export default ModalConfirmation;

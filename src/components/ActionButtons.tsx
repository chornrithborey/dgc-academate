import React from "react";
import { Stack, Button } from "@mui/material";
import { RemoveRedEyeOutlined as ViewIcon } from "@mui/icons-material";
import { StudentRow } from "../types/student";

interface ActionButtonsProps {
  row: StudentRow;
  buttonTitle?: string;
  onClick?: (row: StudentRow) => void;
  acceptTitle?: string;
  rejectTitle?: string;
  onAccept?: (row: StudentRow) => void;
  onReject?: (row: StudentRow) => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  row,
  buttonTitle,
  onClick,
  acceptTitle,
  rejectTitle,
  onAccept,
  onReject,
}) => (
  <Stack direction="row" spacing={1}>
    {buttonTitle && onClick && (
      <Button
        disableElevation
        sx={{ backgroundColor: "#C8E4FA", color: "#0D6DC5" }}
        variant="contained"
        size="small"
        onClick={() => onClick(row)}
        startIcon={<ViewIcon />}
      >
        {buttonTitle}
      </Button>
    )}
    {acceptTitle && onAccept && (
      <Button
        disableElevation
        sx={{ backgroundColor: "#75C359" }}
        variant="contained"
        onClick={() => onAccept(row)}
        size="small"
      >
        {acceptTitle}
      </Button>
    )}
    {rejectTitle && onReject && (
      <Button
        disableElevation
        sx={{ backgroundColor: "#D93B3B" }}
        variant="contained"
        onClick={() => onReject(row)}
        size="small"
      >
        {rejectTitle}
      </Button>
    )}
  </Stack>
);

export default ActionButtons;
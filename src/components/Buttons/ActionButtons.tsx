import React from "react";
import { Button, Stack } from "@mui/material";
import { StudentRow } from "../../types/student";

export const ActionButtons: React.FC<{
  row: StudentRow;
  onAction: (row: StudentRow, actionType: string) => void;
  actions: { label: string; color: string; textColor?:string, icon?: React.ReactNode }[];
}> = ({ row, onAction, actions }) => (
  <Stack direction="row" spacing={1}>
    {actions.map((action) => (
      <Button
        key={action.label}
        disableElevation
        sx={{ backgroundColor: action.color, color: 
            action.textColor ? action.textColor : "white"
         }}
        variant="contained"
        size="small"
        onClick={() => onAction(row, action.label)}
        startIcon={action.icon}
      >
        {action.label}
      </Button>
    ))}
  </Stack>
);

export default ActionButtons;
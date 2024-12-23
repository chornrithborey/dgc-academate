import React from "react";
import { styled } from "@mui/material/styles";

const drawerWidth = 240;

const Main = styled("main")<{ open?: boolean; backgroundColor?: string }>(
  ({ theme, open, backgroundColor }) => ({
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: open ? 0 : -drawerWidth,
    backgroundColor: backgroundColor || "inherit",
  })
);

const MainContent: React.FC<{ open: boolean; children: React.ReactNode }> = ({
  open,
  children,
}) => <Main open={open}>{children}</Main>;

export default MainContent;
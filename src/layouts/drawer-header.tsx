import React from "react";
import { styled } from "@mui/material/styles";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  border: "none",
  padding: theme.spacing(1, 1, 1, 5),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

const DrawerHeaderComponent: React.FC = () => <DrawerHeader />;

export default DrawerHeaderComponent;


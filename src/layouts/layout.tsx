import React, { useState } from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../theme";
import Sidebar from "./sidebar";
import DrawerHeader from "./drawer-header";
import MainContent from "./main";
import Header from "./header";

const MainLayout: React.FC<{
  children: React.ReactNode;
  backgroundColor?: string;
}> = ({ children, backgroundColor }) => {
  const [open] = useState(true);

  return (
    <ThemeProvider theme={theme(backgroundColor || "#ffffff")}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header open={open} />
        <Sidebar open={open} />
        <MainContent open={open}>
          <DrawerHeader />
          {children}
        </MainContent>
      </Box>
    </ThemeProvider>
  );
};

export default MainLayout;
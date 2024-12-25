import React from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../theme";

const AuthLayout: React.FC<{
    children: React.ReactNode;
    backgroundColor?: string;
}> = ({ children, backgroundColor }) => {

    return (
        <ThemeProvider theme={theme(backgroundColor || "#3BB2D9")}>
            <Box sx={{ 
                height: "100vh",
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "rgba(17, 17, 17, 0.35)",
            }}>
                <CssBaseline />
                    {children}
            </Box>
        </ThemeProvider>
    );
};

export default AuthLayout;
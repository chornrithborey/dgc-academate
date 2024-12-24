import React from "react";
import { Container, Box, Avatar, useMediaQuery, useTheme, Grid2 as Grid } from "@mui/material";
import AuthForm from "../../components/Forms/AuthForm";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("auth", "true");
    navigate("/");
  };

  return (
    <Container
      sx={{
        bgcolor: "#3BB2D9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        minWidth: "50vw",
        padding: isSmallScreen ? "1rem" : "0",
      }}
    >
      <Grid>
        <Box
          sx={{
            elevation: 0,
            bgcolor: "#ffffff",
            borderRadius: "24px",
            py: isSmallScreen ? "1rem" : "2rem",
            px: isSmallScreen ? "1.5rem" : "3rem",
            height: isSmallScreen ? "auto" : "70vh",
            width: isSmallScreen ? "80vw" : theme.breakpoints.down("md") ? "60vw" : "50vw",
          }}
        >
          <Avatar
            sizes="large"
            sx={{
              margin: "0 auto",
              marginBottom: "1rem",
              width: "100px",
              height: "100px",
            }}
            src="/assets/logo.svg"
            alt="logo"
          />
          <AuthForm title="Sign In" onSubmit={handleLogin} />
        </Box>
      </Grid>
    </Container>
  );
};

export default LoginPage;
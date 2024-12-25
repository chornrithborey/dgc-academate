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
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        minWidth: "50vw",
        padding: isSmallScreen ? "1rem" : "0",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      />
      <Grid sx={{ position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            elevation: 0,
            bgcolor: "#ffffff",
            borderRadius: "24px",
            py: isSmallScreen ? "1rem" : "2rem",
            px: isSmallScreen ? "1.5rem" : "3rem",
            height: "auto",
            width: isSmallScreen ? "90vw" : theme.breakpoints.down("md") ? "40vw" : "35vw",
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

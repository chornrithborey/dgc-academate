import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import { Logout as LogoutIcon } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { useNavigate, useLocation } from "react-router-dom";
import { routes } from "../routes";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  border: "none",
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

const Sidebar: React.FC<{ open: boolean }> = ({ open }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleRoute = (path: string) => {
    navigate(path);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <Drawer
      sx={{
        width: open ? drawerWidth : 0,
        flexShrink: 0,
        transition: "width 0.3s ease",
        "& .MuiDrawer-paper": {
          borderRadius: "0px",
          width: open ? drawerWidth : 0,
          boxShadow: "0px 0px 20px 0px #3BB2D940",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "0px 16px",
        }}
      >
        <img width={100} height={100} src="/assets/logo.svg" alt="Logo" />
      </DrawerHeader>

      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <List sx={{ flexGrow: 1 }}>
          {routes.map((route) => (
            <ListItem key={route.path}>
              <ListItemButton
                onClick={() => handleRoute(route.path)}
                sx={{
                  borderRadius: "4px",
                  backgroundColor: isActive(route.path) ? "#E6F6FC" : "inherit",
                  "&:hover": {
                    backgroundColor: isActive(route.path) ? "#E6F6FC" : "inherit",
                  },
                  color: isActive(route.path) ? "primary.main" : "inherit",
                }}
              >
                <ListItemIcon
                  sx={{
                    color: isActive(route.path) ? "primary.main" : "inherit",
                  }}
                >
                  {route.icon}
                </ListItemIcon>
                <ListItemText
                  sx={{
                    fontWeight: isActive(route.path) ? 700 : 400,
                    color: isActive(route.path) ? "primary.main" : "inherit",
                  }}
                  primary={route.label}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List>
          <ListItem>
            <ListItemButton
              sx={{
                borderRadius: "4px",
              }}
              onClick={() => {
                navigate("/login");
              }}
            >
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText
                sx={{
                  fontWeight: 400,
                  color: "inherit",
                }}
                primary="Logout"
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;

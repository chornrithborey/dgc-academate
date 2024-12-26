import React from "react";
import { styled } from "@mui/material/styles";
import {
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
  Badge,
  Box,
  Typography,
  Stack,
  Avatar,
} from "@mui/material";
import {
  KeyboardArrowDownOutlined as ArrowDownIcon,
  ArrowForwardIosOutlined as ArrowForwardIcon,
  Notifications as NotificationsIcon,
  AccountCircle,
  MoreVert as MoreIcon,
} from "@mui/icons-material";

const drawerWidth = 240;

interface AppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Header: React.FC<{ open: boolean }> = ({ open }) => (
  <AppBar
    sx={{
      borderRadius: "0px",
      zIndex: (theme) => theme.zIndex.drawer + 1,
    }}
    open={open}
    color="inherit"
    elevation={0}
    position="fixed"
  >
    <Toolbar sx={{ 
      p:1,
      justifyContent: "space-between" }}>
      <Stack>
        <Typography 
        variant="subtitle1" noWrap component="div" sx={{ textAlign: "left" }}>
          Welcome Boran 
        </Typography>
        <Typography variant="caption" noWrap component="div" sx={{ textAlign: "left" }}>
          <Box component="span" sx={{ color: "primary.main" }}>Lecturer</Box> <ArrowForwardIcon
          sx={{ 
            fontSize: "5px",
            verticalAlign: "middle" }}
          /> TIPLR Education Pvt. Ltd.
        </Typography>
      </Stack>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton size="small" aria-label="show 4 new mails" color="inherit">
          <Avatar
            sx={{
              p: 0.2,
              width: 25,
              height: 25,
            }}
            alt="message icon"
            src="../assets/header/message-icon.svg"
          />
        </IconButton>
        <IconButton size="small" aria-label="show 4 new mails" color="inherit">
          <Avatar
            sx={{
              p: 0.2,
              width: 25,
              height: 25,
            }}
            alt="message icon"
            src="../assets/header/notification-icon.svg"
          />
        </IconButton>
        <Stack direction="row" alignItems="center" spacing={1}>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
          >
            <Avatar
              sx={{}}
              alt="message icon"
              src="../assets/setting/avatar.svg"
            />
          </IconButton>
            <Box sx={{ textAlign: "left" }}>
            <Typography variant="subtitle1" sx={{ lineHeight: 1 }}>
              Boran Pol
            </Typography>
            <Typography variant="caption" sx={{ lineHeight: 1 }}>
              boranpol@gmail.com
            </Typography>
            </Box>
        </Stack>
        <IconButton
          size="large"
          aria-label="show more"
          aria-haspopup="true"
          color="inherit"
        >
          <ArrowDownIcon />
        </IconButton>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;

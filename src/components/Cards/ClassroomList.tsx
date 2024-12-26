import React from "react";
import {
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Link,
  Divider,
  ListItemIcon,
  Avatar,
  Stack,
  Typography,
} from "@mui/material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const ClassroomList: React.FC = () => (
  <Paper elevation={0} sx={{ py: 2 }}>
    <List
      dense
      subheader={
        <Typography px={2} variant="caption">
          Total classroom
        </Typography>
      }
    >
      <ListItem>
        <ListItemText>
          <Typography variant="subtitle1">11 classrooms</Typography>
        </ListItemText>
        <ListItemAvatar>
          <Link 
          sx={{ color: "primary.main" }}
          component="button" variant="body2">
            View more
          </Link>
        </ListItemAvatar>
      </ListItem>
      <Divider variant="middle" />

      {["Kampong Cham", "Siem Reap"].map((location, index) => (
        <ListItem
          sx={{
            pl: 5,
            py: 1,
          }}
          key={index}
        >
          <ListItemIcon>
            <Avatar
              sx={{
                p: 2,
                color: "#212121",
                bgcolor: "#E4F7FF",
                width: 24,
                height: 24,
                borderRadius: 10,
              }}
            >
              <Typography variant="subtitle1">{index + 1}</Typography>
            </Avatar>
          </ListItemIcon>
          <ListItemText>{location}</ListItemText>
          <ListItemAvatar>
            <Stack padding={1} direction="row" alignItems="center" spacing={1}>
              <Typography
                fontSize={16}
                fontWeight={700}
                color="primary.main"
                variant="subtitle1"
              >
                {index === 0 ? 30 : 20}
              </Typography>
              <PersonOutlinedIcon
                sx={{ color: "primary.main" }}
                fontSize="small"
              />
            </Stack>
          </ListItemAvatar>
        </ListItem>
      ))}

      <Divider variant="middle" />
    </List>
  </Paper>
);

export default ClassroomList;

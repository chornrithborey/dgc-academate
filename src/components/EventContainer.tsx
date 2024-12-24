import React from "react";
import {
  Paper,
  Divider,
  Stack,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const EventCalendar: React.FC = () => (
  <Paper
    sx={{
      p: 0,
      m: 0,
    }}
    elevation={0}
  >
    <LocalizationProvider 
 
    dateAdapter={AdapterDayjs}>
      <DateCalendar
        readOnly
        sx={{
          p: 0,
          m: 0,
          height: "300px",
          width: "300px",
          borderRadius: 0,
          "& .MuiPickersDay-day": {
            color: "text.primary",
          },

          "& .MuiPickersDay-current": {
            color: "primary.main",
            border: "none",
          },
          "& .MuiPickersDay-today": {
            backgroundColor: "primary.main",
            color: "white",
            border: "none",
          },
        }}
      />
    </LocalizationProvider>
    <Divider variant="middle" />
    <Stack
      direction="row"
      useFlexGap
      sx={{ justifyContent: "space-between", alignItems: "center" }}
      spacing={2}
      p={2}
    >
      <Typography variant="subtitle1">Events</Typography>
      <Stack
        direction="column"
        useFlexGap
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        <IconButton
          sx={{
            p: 0,
            m: 0,
          }}
          size="small"
        >
          <KeyboardArrowUpIcon />
        </IconButton>
        <IconButton
          sx={{
            p: 0,
            m: 0,
          }}
          size="small"
        >
          <KeyboardArrowDownIcon />
        </IconButton>
      </Stack>
    </Stack>
    <List
      subheader={
        <Typography px={2} variant="caption">
          08 AM - 09 AM
        </Typography>
      }
    >
      <ListItem>
        <ListItemText primary="Class: Kampong Cham | Course: JAVA" />
      </ListItem>
    </List>
  </Paper>
);

export default EventCalendar;
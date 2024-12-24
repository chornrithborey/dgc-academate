import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Chip,
  Stack,
  Typography,
  Grid2 as Grid,
  Button,
} from "@mui/material";
import { ClockIcon } from "@mui/x-date-pickers";
import { CalendarMonth as CalendarIcon } from "@mui/icons-material";

interface CourseCardProps {
  title: string;
  classroom: string;
  time: string;
  date: string;
  status: "Completed" | "Not Yet";
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  classroom,
  time,
  date,
  status,
}) => (
  <Card
    elevation={0}
    sx={{
      border: "1px solid #A0A0A0",
      px: 2,
      pb: 1,
    }}
  >
    <CardHeader
      sx={{
        pl: 0,
        pr: 0,
      }}
      title={title}
      titleTypographyProps={{ variant: "h6", fontWeight: 600 }}
    />
    <CardContent
      sx={{
        m: 0,
        p: 0,
      }}
    >
      <Chip
        sx={{
          borderRadius: 1,
          color: "#9A9A9A",
        }}
        variant="outlined"
        label={`Classroom: ${classroom}`}
      />
      <Stack py={1} direction="row" spacing={1} alignItems="center">
        <Grid container alignItems="center">
          <ClockIcon sx={{ color: "#989898" }} />
          <Typography variant="subtitle1" color="#989898" sx={{ ml: 0.5 }}>
            {time}
          </Typography>
        </Grid>
        <Grid container alignItems="center">
          <CalendarIcon sx={{ color: "#989898" }} />
          <Typography variant="subtitle1" color="#989898" sx={{ ml: 0.5 }}>
            {date}
          </Typography>
        </Grid>
      </Stack>
      <Chip
        sx={{
          borderRadius: 1,
          color: status === "Completed" ? "#3EDC4E" : "#F93333",
        }}
        label={`Status: ${status}`}
        color={status === "Completed" ? "success" : "error"}
      />
    </CardContent>
    <CardActions
      sx={{
        pl: 0,
        pr: 0,
      }}
    >
      <Button variant="contained" fullWidth disableElevation color="primary">
        Attendance
      </Button>
    </CardActions>
  </Card>
);

export default CourseCard;
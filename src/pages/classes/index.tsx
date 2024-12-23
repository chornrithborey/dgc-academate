import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
  Grid2 as Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Chip,
} from "@mui/material";
import DashboardHeader from "../../components/dashboard-header";
import {
  Search as SearchIcon,
  PunchClock as PunchClockIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";
import React from "react";
import InputBase from "@mui/material/InputBase";
import { ClockIcon } from "@mui/x-date-pickers";

const SearchInput: React.FC = () => (
  <Paper
    elevation={0}
    component="form"
    sx={{
      borderRadius: 1,
      elvation: 0,
      bgcolor: "#F1F1F1",
      p: "4px 4px",
      display: "flex",
      alignItems: "center",
      width: 400,
    }}
  >
    <SearchIcon sx={{ color: "#9E9E9E" }} />
    <InputBase
      sx={{ ml: 1, bgcolor: "#F1F1F1", color: "grey", flex: 1, elvation: 0 }}
      placeholder="Search . . ."
    />
  </Paper>
);

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function ClassTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", p: 0, m: 0 }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "#C8E4FA",
          p: 0,
          m: 0,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Batches" {...a11yProps(0)} />
          <Tab label="Classes" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <ClassTabPanel value={value} index={0}>
        <BatchCardList />
      </ClassTabPanel>
      <ClassTabPanel value={value} index={1}>
        <Grid container direction={"row"} spacing={2}>
          <Grid size={4}>
            <CourseCard
              title="How to Make an Array and it’s Types in C++"
              classroom="Classroom : Kampong cham"
              time="10:00 AM"
              date="03 Jan 2023"
              status="Completed"
            />
          </Grid>
          <Grid size={4}>
            <CourseCard
                     title="How to Make an Array and it’s Types in C++"
                     classroom="Classroom :  Phnom Penh"
                     time="10:00 AM"
                     date="03 Jan 2023"
                     status="Not Yet"
            />
          </Grid>
          <Grid size={4}>
            <CourseCard 
                    title="How to Make an Array and it’s Types in C++"
                    classroom="Classroom : Siem Reap"
                    time="10:00 AM"
                    date="03 Jan 2023"
                    status="Not Yet"
            />
          </Grid>
        </Grid>
      </ClassTabPanel>
    </Box>
  );
}

const BatchCardList: React.FC = () => {
  const cards = [];
  for (let i = 0; i < 6; i++) {
    cards.push(<BatchCard key={i} />);
  }

  return (
    <Grid container spacing={2}>
      {cards.map((card, index) => (
        <Grid size={4} key={index}>
          {card}
        </Grid>
      ))}
    </Grid>
  );
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function ClassTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      style={{ padding: 0 }}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

const BatchCard: React.FC = () => (
  <Paper
    elevation={0}
    sx={{
      elevation: 0,
      py: 3,
      px: 3,
      display: "flex",
      border: "1px solid #E6E6E6",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "start",
    }}
  >
    <Typography variant="h6" fontWeight={600} gutterBottom>
      12th Generation
    </Typography>
    <Typography variant="subtitle1" color="#919499" gutterBottom>
      Course: B.Tech Specialization in Health Informatics
    </Typography>
    <Button
      sx={{ mt: 2 }}
      variant="contained"
      fullWidth
      disableElevation
      color="primary"
    >
      View Details
    </Button>
  </Paper>
);

interface CourseCardProps {
  title: string;
  classroom: string;
  time: string;
  date: string;
  status: "Completed" | "Not Yet";
}

const CourseCard: React.FC<CourseCardProps> = ({ title, classroom, time, date, status }) => (
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
        <Grid

        container alignItems="center">
          <ClockIcon sx={{ color: "#989898" }} />
          <Typography variant="subtitle1" color="#989898" sx={{ ml: 0.5 }}>
            {time}
          </Typography>
        </Grid>
        <Grid
   
        container alignItems="center">
          <CalendarIcon sx={{ color: "#989898" }} />
          <Typography variant="subtitle1" color="#989898" sx={{ ml: 0.5 }}>
            {date}
          </Typography>
        </Grid>
      </Stack>
      <Chip
        sx={{ borderRadius: 1, color: status === "Completed" ? "#3EDC4E" : "#F93333" }}
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

const ClassesPage: React.FC = () => (
  <Container sx={{ py: 3 }}>
    <DashboardHeader
      title="Classes"
      subtitle="Manage and organize your generations"
      buttonText="Create Generation"
      onButtonClick={() => console.log("Add class clicked")}
    />
    <Stack
      py={5}
      useFlexGap
      direction={"row"}
      alignItems={"end"}
      spacing={1}
      justifyContent={"space-between"}
    >
      <Grid size={4}>
        <Typography variant="subtitle1" fontWeight={600}>
          Batches Details
        </Typography>
      </Grid>

      <Grid size={8}>
        <SearchInput />
      </Grid>
    </Stack>

    <Grid size={12}>
      <ClassTab />
    </Grid>
  </Container>
);

export default ClassesPage;

import React from "react";
import { Container, Grid2 as Grid, Paper } from "@mui/material";
import DashboardHeader from "../../components/DashboardHeader";
import DashboardCard from "../../components/DashboardCard";
import EventCalendar from "../../components/EventContainer";
import ClassroomList from "../../components/Cards/ClassroomList";
import StudentDataTable from "../../components/Tables/StudentDataTable";

const handleButtonClick = () => {
  console.log("Button clicked");
};

const DashboardPage: React.FC = () => (
  <Container sx={{ bgcolor: "#EBF7FB", py: 3 }}>
    <DashboardHeader
      title="Dashboard"
      subtitle="Instructor Dashboard"
      buttonText="Create Classroom"
      onButtonClick={handleButtonClick}
      showButton={true}
    />
    <Grid direction={"row"} py={2} container size={12} spacing={2}>
      <Grid size={8}>
        <Grid direction={"row"} container spacing={2}>
          <Grid size={6}>
            <DashboardCard
              iconPath="/assets/dashboard/chart.svg"
              bgcolor="#F0F0F5"
              title="Generation"
              subtitle="12th Generation"
            />
          </Grid>
          <Grid size={3}>
            <DashboardCard
              iconPath="/assets/dashboard/female.svg"
              bgcolor="#FCF2F2"
              title="Female students"
              subtitle="50"
            />
          </Grid>
          <Grid size={3}>
            <DashboardCard
              bgcolor="#C8E4FA"
              iconPath="/assets/dashboard/male.svg"
              title="Male students"
              subtitle="20"
            />
          </Grid>
        </Grid>
        <Grid py={2}>
          <Paper
            elevation={0}
            sx={{
              px: 2,
              borderRadius: 2,
            }}
          >
            <StudentDataTable />
          </Paper>
        </Grid>
      </Grid>

      <Grid
        sx={{
          p: 0,
          m: 0,
        }}
        size={4}
      >
        <EventCalendar />
        <Grid sx={{ py: 2 }}>
          <ClassroomList />
        </Grid>
      </Grid>
    </Grid>
  </Container>
);

export default DashboardPage;

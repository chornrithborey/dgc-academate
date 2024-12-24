import React from "react";
import { Container, Grid2 as Grid } from "@mui/material";
import DashboardHeader from "../../components/DashboardHeader";
import HeaderSection from "../../components/HeaderSection";
import TabsContainer from "../../components/Tabs/TabsContainer";
import CourseCard from "../../components/Cards/CourseCard";
import courses from "../../data/courses";

const AttendancePage: React.FC = () => (
  <Container sx={{ py: 3 }}>
    <DashboardHeader
      title="Attendance"
      subtitle="Manage and organize attendance students"
      buttonText="Attendance Details"
      showButton={false}
    />
    <HeaderSection 
    isSearch={true}
    title="Batches Details" />
    <Grid>
    <TabsContainer tabLabels={["Classes"]}>
      <Grid container spacing={3}>
        {courses.map((item, index) => (
          <Grid 
          size={
            4
          }
          key={index}>
            <CourseCard
              key={index}
              title={item.title}
              classroom={item.classroom}
              time={item.time}
              date={item.date}
              status={item.status === "Completed" ? "Completed" : "Not Yet"}
            />
          </Grid>
        ))}
      </Grid>
    </TabsContainer>
    </Grid>

  </Container>
);

export default AttendancePage;

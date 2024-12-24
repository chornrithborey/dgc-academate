import React from "react";
import { Box, Container, Grid2 as Grid } from "@mui/material";
import DashboardHeader from "../../components/DashboardHeader";
import HeaderSection from "../../components/HeaderSection";
import TabsContainer from "../../components/Tabs/TabsContainer";
import BatchCard from "../../components/Cards/BatchCard";
import BatchCardList from "../../components/Cards/BatchCardList";
import ClassroomList from "../../components/Cards/ClassroomList";
import CourseCard from "../../components/Cards/CourseCard";


const courses = [
  {
    title: "How to Make an Array and it’s Types in C++",
    classroom: "Classroom : Kampong cham",
    time: "10:00 AM",
    date: "03 Jan 2023",
    status: "Completed",
  },
  {
    title: "How to Make an Array and it’s Types in C++",
    classroom: "Classroom : Phnom Penh",
    time: "10:00 AM",
    date: "03 Jan 2023",
    status: "Not Yet",
  },
  {
    title: "How to Make an Array and it’s Types in C++",
    classroom: "Classroom : Kampong cham",
    time: "10:00 AM",
    date: "03 Jan 2023",
    status: "Completed",
  },
  {
    title: "How to Make an Array and it’s Types in C++",
    classroom: "Classroom : Phnom Penh",
    time: "10:00 AM",
    date: "03 Jan 2023",
    status: "Not Yet",
  },
];

const ClassesPage: React.FC = () => (
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
              title={item.title + index}
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

export default ClassesPage;

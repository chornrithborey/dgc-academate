import React from "react";
import {
  Container,
  Grid2 as Grid,
} from "@mui/material";
import DashboardHeader from "../../components/dashboard-header";
import HeaderSection from "../../components/header-section";
import ClassTab from "../../components/class-tab";

const ClassesPage: React.FC = () => (
  <Container sx={{ py: 3 }}>
    <DashboardHeader
      title="Classes"
      subtitle="Manage and organize your generations"
      buttonText="Create Generation"
      onButtonClick={() => console.log("Create Generation")}
    />
      <HeaderSection title="Batches Details" />
    <Grid >
      <ClassTab />
    </Grid>
  </Container>
);

export default ClassesPage;
import React from "react";
import { Container, Grid2 as Grid } from "@mui/material";
import DashboardHeader from "../../components/DashboardHeader";
import HeaderSection from "../../components/HeaderSection";
import ClassTab from "../../components/Tabs/ClassTab";

const ClassesPage: React.FC = () => (
  <Container sx={{ py: 3 }}>
    <DashboardHeader
      title="Classes"
      subtitle="Manage and organize your generations"
      buttonText="Create Generation"
      onButtonClick={() => console.log("Create Generation")}
    />
    <HeaderSection title="Batches Details" />
    <Grid>
      <ClassTab />
    </Grid>
  </Container>
);

export default ClassesPage;

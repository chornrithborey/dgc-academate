import React from "react";
import {
  Container,
  Stack,
  Typography,
  Grid2 as Grid,
} from "@mui/material";
import DashboardHeader from "../../components/dashboard-header";
import SearchInput from "../../components/search-input";
import ClassTab from "../../components/class-tab";

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
      <Grid >
        <Typography variant="subtitle1" fontWeight={600}>
          Batches Details
        </Typography>
      </Grid>

      <Grid >
        <SearchInput />
      </Grid>
    </Stack>

    <Grid >
      <ClassTab />
    </Grid>
  </Container>
);

export default ClassesPage;
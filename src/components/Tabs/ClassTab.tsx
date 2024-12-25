import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Grid2 as Grid,
} from "@mui/material";
import ClassTabPanel from "./ClassTabPanel";
import BatchCardList from "../Cards/BatchCardList";
import CourseCard from "../Cards/CourseCard";

const ClassTab: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const getTabIndex = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };


  return (
    <Box sx={{ width: "100%", p: 0, m: 0 }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "primary.main",
          p: 0,
          m: 0,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Batches" {...getTabIndex(0)} />
          <Tab label="Classes" {...getTabIndex(1)} />
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
              classroom="Classroom : Phnom Penh"
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
};

export default ClassTab;

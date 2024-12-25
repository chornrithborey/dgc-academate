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
import courses from "../../data/courses";

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
          {courses.map((course, index) => (
            <Grid key={index} size={4}>
              <CourseCard
                title={course.title}
                classroom={course.classroom}
                time={course.time}
                date={course.date}
                status={
                  course.status === "Not Yet" ? "Not Yet" : "Completed"
                }
              />
            </Grid>
          ))}
        </Grid>
      </ClassTabPanel>

    </Box>
  );
};

export default ClassTab;

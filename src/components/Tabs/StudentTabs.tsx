import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import TabPanel from "./TabPanel";

export const StudentTabs: React.FC<{
  tabLabels: string[];
  children: React.ReactNode[];
}> = ({ tabLabels, children }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "#C8E4FA", }}>
        <Tabs value={value} onChange={handleChange} aria-label="tabs">
          {tabLabels.map((label, index) => (
            <Tab key={label} label={label} id={`tab-${index}`} />
          ))}
        </Tabs>
      </Box>
      {children.map((child, index) => (
        <TabPanel key={index} value={value} index={index}>
          {child}
        </TabPanel>
      ))}
    </Box>
  );
};

export default StudentTabs;
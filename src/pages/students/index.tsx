import React, { useState } from "react";
import {
  Container,
  Tabs,
  Box,
  Tab,
  Grid2 as Grid,
  Stack,
  Button,
} from "@mui/material";
import DashboardHeader from "../../components/DashboardHeader";
import HeaderSection from "../../components/HeaderSection";
import StudentDataGrid from "../../components/StudentDataGrid";
import ClassTabPanel from "../../components/ClassTabPanel";
import { StudentRow } from "../../types/student";
import { RemoveRedEyeOutlined as ViewIcon } from "@mui/icons-material";
import { generateMockData } from "../../utils/mockDataGenerator";
import { formatDate } from "../../utils/formatDate";

function getTabProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function handleRowClick(row: StudentRow) {
  alert(`You clicked on row with id: ${row.id}`);
}

const StudentTab = () => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;

  const StudentActionButtons = ({
    row,
    buttonTitle,
  }: {
    row: StudentRow;
    buttonTitle: string;
  }) => (
    <Stack direction="row" spacing={1}>
      <Button
        disableElevation
        sx={{ backgroundColor: "#C8E4FA", color: "#0D6DC5" }}
        variant="contained"
        size="small"
        onClick={() => handleRowClick(row)}
        startIcon={<ViewIcon />}
      >
        {buttonTitle}
      </Button>
    </Stack>
  );

  const StudentRequestActionButtons = ({
    row,
    acceptTitle,
    rejectTitle,
  }: {
    row: StudentRow;
    acceptTitle: string;
    rejectTitle: string;
  }) => (
    <Stack direction="row" spacing={1}>
      <Button
        disableElevation
        sx={{ backgroundColor: "#75C359" }}
        variant="contained"
        onClick={() => handleRowClick(row)}
        size="small"
      >
        {acceptTitle}
      </Button>
      <Button
        disableElevation
        sx={{ backgroundColor: "#D93B3B" }}
        variant="contained"
        onClick={() => handleRowClick(row)}
        size="small"
      >
        {rejectTitle}
      </Button>
    </Stack>
  );

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
          <Tab label="Student" {...getTabProps(0)} />
          <Tab label="Student request" {...getTabProps(1)} />
          <Tab label="Rejected student" {...getTabProps(2)} />
        </Tabs>
      </Box>

      <ClassTabPanel value={value} index={0}>
        <StudentDataGrid
          rows={studentData}
          columns={columns}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={setPage}
          actionButtons={(row: StudentRow) => (
            <StudentActionButtons buttonTitle="View details" row={row} />
          )}
        />
      </ClassTabPanel>
      <ClassTabPanel value={value} index={1}>
        <StudentDataGrid
          rows={studentData}
          columns={columns}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={setPage}
          actionButtons={(row: StudentRow) => (
            <StudentRequestActionButtons
              acceptTitle="Accept"
              rejectTitle="Reject"
              row={row}
            />
          )}
        />
      </ClassTabPanel>
      <ClassTabPanel value={value} index={2}>
        <StudentDataGrid
          rows={studentData}
          columns={columns}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={setPage}
          actionButtons={(row: StudentRow) => (
            <StudentRequestActionButtons
              acceptTitle="Re-Accept"
              rejectTitle="Delete"
              row={row}
            />
          )}
        />
      </ClassTabPanel>
    </Box>
  );
};

const columns = [
  { field: "id", headerName: "S.No", width: 70 },
  { field: "firstName", headerName: "Name", width: 130 },
  { field: "lastName", headerName: "Course", width: 130 },
  { field: "classroom", headerName: "Classroom", width: 90 },
  { field: "dateOfBirth", headerName: "Date Of Birth", width: 90 },
  {
    field: "attendance",
    headerName: "Attendance",
    width: 130,
  },
];


const studentData: StudentRow[] = generateMockData(50);

const StudentPage: React.FC = () => {
  return (
    <Container sx={{ py: 3 }}>
      <DashboardHeader
        title="Students"
        subtitle="Manage and organize students"
        buttonText="Create Generation"
        showButton={false}
        onButtonClick={() => console.log("Create Generation")}
      />
      <HeaderSection
        isFilter={true}
        isExcelExport={true}
        title="Student Details"
      />
      <Grid>
        <StudentTab />
      </Grid>
    </Container>
  );
};

export default StudentPage;

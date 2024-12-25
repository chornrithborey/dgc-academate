import React, { useState } from "react";
import {
  Button,
  Chip,
  Container,
  Grid2 as Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DashboardHeader from "../../components/DashboardHeader";
import HeaderSection from "../../components/HeaderSection";
import StudentDataGrid from "../../components/Tables/StudentDataGrid";
import ActionButtons from "../../components/Buttons/ActionButtons";
import StudentTabs from "../../components/Tabs/StudentTabs";
import { generateMockData } from "../../utils/mockDataGenerator";
import { StudentRow } from "../../types/student";
import { RemoveRedEyeOutlined as ViewIcon } from "@mui/icons-material";

const initialStudentData: StudentRow[] = generateMockData(50);
const rowsPerPage = 5;

const StudentPage: React.FC = () => {
  const [page, setPage] = useState(0);
  const [studentData, setStudentData] = useState(initialStudentData);

  const handleScoreChange = (id: number, newScore: string) => {
    const validScore = Math.min(Math.max(parseInt(newScore, 10), 0), 100);
    setStudentData((prevData) =>
      prevData.map((student) =>
        student.id === id
          ? { ...student, score: validScore.toString() }
          : student
      )
    );
  };

  const columns = [
    { field: "id", headerName: "S.No", width: 70 },
    { field: "firstName", headerName: "Name", width: 130 },
    { field: "lastName", headerName: "Course", width: 130 },
    { field: "classroom", headerName: "Classroom", width: 90 },
    {
      field: "score",
      headerName: "Score",
      width: 130,
      renderCell: (params: any) => (
        <Stack direction={"row"} alignItems={"center"}>
          <TextField
            sx={{ borderRadius: "5px", width: 80, mr: 1 }}
            value={params.value}
            onChange={(e) => handleScoreChange(params.row.id, e.target.value)}
            variant="outlined"
            size="small"
          />
          <Typography variant="subtitle2">/100</Typography>
        </Stack>
      ),
    },
    {
      field: "attendance",
      headerName: "Attendance",
      width: 130,
      renderCell: (params: any) => (
        <Stack direction={"row"} alignItems={"center"}>
          <Chip
            sx={{
              borderRadius: 1,
              color:
                params.row.attendance === "Present" ? "#3EDC4E" :  params.row.attendance === "Absent" ? "#FF0000" : "#2C97EB",
            }}
            label={`${params.row.attendance}`}
            color={
              params.row.attendance === "Present" ? "success" :  params.row.attendance === "Absent" ? "error" : "info"
            }
          />
        </Stack>
      ),
    },
  ];

  const handleAction = (row: StudentRow, actionType: string) => {
    alert(`${actionType} clicked for row with id: ${row.id}`);
  };

  return (
    <Container sx={{ py: 3 }}>
      <DashboardHeader
        title="Student score"
        subtitle="Manage and organize scores"
        buttonText="Create Generation"
        showButton={false}
        onButtonClick={() => console.log("Create Generation")}
      />
      <HeaderSection
        isFilter={true}
        isExcelExport={true}
        title="Score Details"
      />
      <Grid>
        <StudentTabs tabLabels={["Student", "Course score", "Scores"]}>
          <StudentDataGrid
            rows={studentData}
            columns={columns}
            page={page}
            rowsPerPage={rowsPerPage}
            onPageChange={setPage}
            actionButtons={(row) => (
              <ActionButtons
                row={row}
                onAction={handleAction}
                actions={[
                  {
                    label: "View Details",
                    color: "#C8E4FA",
                    textColor: "#0D6DC5",
                    icon: <ViewIcon />,
                  },
                ]}
              />
            )}
          />
          <StudentDataGrid
            rows={studentData}
            columns={columns}
            page={page}
            rowsPerPage={rowsPerPage}
            onPageChange={setPage}
            actionButtons={(row) => (
              <ActionButtons
                row={row}
                onAction={handleAction}
                actions={[
                  { label: "Accept", color: "#75C359" },
                  { label: "Reject", color: "#D93B3B" },
                ]}
              />
            )}
          />
          <StudentDataGrid
            rows={studentData}
            columns={columns}
            page={page}
            rowsPerPage={rowsPerPage}
            onPageChange={setPage}
            actionButtons={(row) => (
              <ActionButtons
                row={row}
                onAction={handleAction}
                actions={[
                  { label: "Re-Accept", color: "#75C359" },
                  { label: "Delete", color: "#D93B3B" },
                ]}
              />
            )}
          />
        </StudentTabs>
      </Grid>
    </Container>
  );
};

export default StudentPage;

import React from "react";
import { Container, Grid2 as Grid } from "@mui/material";
import DashboardHeader  from "../../components/DashboardHeader";
import HeaderSection from "../../components/HeaderSection";
import StudentDataGrid from "../../components/Tables/StudentDataGrid";
import ActionButtons from "../../components/Buttons/ActionButtons";
import StudentTabs from "../../components/Tabs/StudentTabs";
import { generateMockData } from "../../utils/mockDataGenerator";
import { StudentRow } from "../../types/student";
import { RemoveRedEyeOutlined as ViewIcon } from "@mui/icons-material";

const studentData: StudentRow[] = generateMockData(50);
const rowsPerPage = 5;
const columns = [
  { field: "id", headerName: "S.No", width: 70 },
  { field: "firstName", headerName: "Name", width: 130 },
  { field: "lastName", headerName: "Course", width: 130 },
  { field: "classroom", headerName: "Classroom", width: 90 },
  { field: "dateOfBirth", headerName: "Date Of Birth", width: 90 },
  { field: "attendance", headerName: "Attendance", width: 130 },
];

const StudentPage: React.FC = () => {
  const [page, setPage] = React.useState(0);

  const handleAction = (row: StudentRow, actionType: string) => {
    alert(`${actionType} clicked for row with id: ${row.id}`);
  };

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
        <StudentTabs
          tabLabels={["Student", "Student Request", "Rejected Student"]}
        >
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
                  { label: "View Details", color: "#C8E4FA", textColor:"#0D6DC5", icon: <ViewIcon /> }]}
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
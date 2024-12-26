import React, {  useState } from "react";
import {
  Box,
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
import ModalContainer from "../../components/Modals/ModalContainer";
import ModalConfirmation from "../../components/Modals/ModalConfirmation";
import StudentSimpleDataTable from "../../components/Tables/SimpleStudentDataTable";
import { studnetAttendanceList } from "../../data/student";


const initialStudentData: StudentRow[] = generateMockData(50);
const rowsPerPage = 5;

const ScorePage: React.FC = () => {
  const [page, setPage] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [openConfimModal, setOpenConfirmModal] = useState(false);
  const [studentData, setStudentData] = useState(initialStudentData);

  const closeModal = () => {
    setOpenModal(false);
  }

  const handlePublishResult = () => {
    setOpenConfirmModal(true);
  }

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
          <Typography variant="subtitle2">/50</Typography>
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
                params.row.attendance === "Present" ? "#3EDC4E" : params.row.attendance === "Absent" ? "#FF0000" : "#2C97EB",
            }}
            label={`${params.row.attendance}`}
            color={
              params.row.attendance === "Present" ? "success" : params.row.attendance === "Absent" ? "error" : "info"
            }
          />
        </Stack>
      ),
    },
  ];

  const handleAction = (row: StudentRow, actionType: string) => {
    setOpenModal(true);
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
      <ModalContainer
        isOpen={openModal}
        onClose={() => closeModal()}
        size="md"
      >
        <Stack
          justifyContent={"space-between"}
          direction="row" spacing={2}>
          <Typography variant="h5">
            Declare Result
          </Typography>
          <Button
            onClick={handlePublishResult}
            disableElevation variant="contained" color="primary">
            Publish Result
          </Button>
        </Stack>
        <Stack
          justifyContent={"space-between"}
          direction="row" spacing={2}>
          <Typography variant="h6">
            BHI Health Informatics mid semester Exam.
          </Typography>
        </Stack>
        <Stack
          my={3}
          direction="row" >
          <Button
            sx={{
              backgroundColor: "#EEEFF9",
              color: "grey",
              px: 5,
            }}
            disableElevation variant="contained" >
            Details
          </Button>
          <Button
            sx={{
              px: 5,
            }}
            disableElevation variant="contained" color="primary">
            Result
          </Button>
        </Stack>
        <StudentSimpleDataTable
          columns={[
            { field: "id", headerName: "Student ID", },
            { field: "name", headerName: "Name", },
            { field: "attachments", headerName: "Aattachments", },
            {
              field: "marks", headerName: "Marks",
              render: (params: any) => (
                <Stack direction={"row"} alignItems={"center"}>
                  <TextField
                    sx={{
                      borderRadius: 0,
                      width: 80,
                      mr: 1
                    }}
                    value={params.value}

                    variant="outlined"
                    size="small"
                  />
                  <Typography variant="subtitle2">{params.row}/50</Typography>
                </Stack>
              )
            },
            {
              field: "Actions",
              headerName: "Actions",
              render: (params: any) => (
                <Stack direction={"row"} alignItems={"center"}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#F2F2F2",
                      color: "#0D6DC5",
                      mr: 1
                    }}
                    size="small"
                    disableElevation
                  >
                    +Add Note
                  </Button>
                  <Button
                    sx={{
                      color: "#0D6DC5",
                    }}
                    variant="contained"
                    color="info"
                    size="small"
                    disableElevation
                  >
                    Save
                  </Button>
                </Stack>
              ),
            }
          ]}
          rows={studnetAttendanceList}
        />
      </ModalContainer>
      <ModalConfirmation
        size="md"
        onClose={() => setOpenConfirmModal(false)}
        isOpen={openConfimModal}
      >
        <Box
          p={3}

        >
          <Typography mt={2} variant="subtitle1" align="center">
            Publish Result of <strong>"BHI Health Informatics mid semester Exam".</strong>
            ?
          </Typography>
          <Typography mt={2} variant="subtitle2" align="center">
            Result once published cannot be altered/reversed.
          </Typography>
          <Stack
            alignContent={"center"}
            justifyContent={"center"}
            alignItems={"center"}
            alignSelf={"center"}
            direction="row" spacing={2}
            mt={5}
          >
            <Button
              sx={{
                border: "1px solid #E0E0E0",
                color: "grey",
                px: 5,
              }}
              disableElevation variant="outlined"
            >
              No
            </Button>
            <Button
              sx={{
                px: 5,
              }}
              disableElevation variant="contained" color="primary"
            >
              Publish
            </Button>
          </Stack>
        </Box>
      </ModalConfirmation>
    </Container>
  );
};

export default ScorePage;

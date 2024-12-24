import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import { Call, MailOutline } from "@mui/icons-material";
import students from "../../data/student";

const StudentDataTable: React.FC = () => (
  <TableContainer elevation={0} component={Paper}>
    <Table>
      <TableHead
        sx={{
          bgcolor: "grey.50",
        }}
      >
        <TableRow>
          <TableCell align="center">Student Name</TableCell>
          <TableCell align="center">Gender</TableCell>
          <TableCell align="center">Course Name</TableCell>
          <TableCell align="center">Classroom</TableCell>
          <TableCell align="center">Contact</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {students.map((student) => (
          <TableRow
            key={student.name}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              <Stack direction="row" alignItems="center" spacing={2}>
                <Avatar src={student.avatar} />
                <Typography variant="subtitle1">{student.name}</Typography>
              </Stack>
            </TableCell>
            <TableCell align="center">{student.gender}</TableCell>
            <TableCell align="center">{student.course}</TableCell>
            <TableCell align="center">{student.classroom}</TableCell>
            <TableCell align="center">
              <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton size="small">
                  <Call fontSize="small" />
                </IconButton>

                <IconButton size="small">
                  <MailOutline fontSize="small" />
                </IconButton>
              </Stack>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default StudentDataTable;
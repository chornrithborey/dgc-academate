import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { StudentRow, StudentDataGridProps } from "../../types/student";
import PaginationControls from "./PaginationControls";

const StudentDataGrid: React.FC<StudentDataGridProps> = ({
  rows,
  columns,
  page,
  rowsPerPage,
  onPageChange,
  onRowClick,
  actionButtons,
}) => {
  const paginatedRows = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Paper elevation={0} sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer>
        <Table>
          <TableHead
            sx={{
              "& .MuiTableCell-root": {
                borderBottom: "none",
              },
            }}
          >
            <TableRow>
              {columns.map((column) => (
                <TableCell align="left" key={column.field}>
                  {column.headerName}
                </TableCell>
              ))}
              {actionButtons && <TableCell align="right"></TableCell>}
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              "& .MuiTableCell-root": {
                borderBottom: "none",
              },
            }}
          >
            {paginatedRows.map((row) => (
              <TableRow
                key={row.id}
                onClick={() => onRowClick?.(row)}
                sx={{ cursor: onRowClick ? "pointer" : "default" }}
              >
                {columns.map((column) => (
                  <TableCell key={column.field} align="left">
                    {row[column.field as keyof StudentRow]}
                  </TableCell>
                ))}
                {actionButtons && (
                  <TableCell align="right">
                    {actionButtons(row)}
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationControls
        page={page}
        rowsPerPage={rowsPerPage}
        totalRows={rows.length}
        onPageChange={onPageChange}
      />
    </Paper>
  );
};

export default StudentDataGrid;
import React, { useState } from "react";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
} from "@mui/material";

interface Column {
    field: string;
    headerName: string;
    align?: "left" | "right" | "center";
    render?: (row: any) => React.ReactNode;
}

interface StudentDataGridProps {
    columns: Column[];
    rows: any[];
    page?: number;
    rowsPerPage?: number;
    onPageChange?: (newPage: number) => void;
    actionButtons?: (row: any) => React.ReactNode;
}

const StudentDataGrid: React.FC<StudentDataGridProps> = ({
    columns,
    rows,
    page = 0,
    rowsPerPage = 5,
    onPageChange,
    actionButtons,
}) => {
    const [currentPage, setCurrentPage] = useState(page);
    const [currentRowsPerPage, setCurrentRowsPerPage] = useState(rowsPerPage);

    const handleChangePage = (event: unknown, newPage: number) => {
        setCurrentPage(newPage);
        if (onPageChange) {
            onPageChange(newPage);
        }
    };

    return (

        <TableContainer      >
            <Table
                sx={{

                    border: "1px solid #E0E0E0",
                }}
            >
                <TableHead
                    sx={{
                        bgcolor: "grey.50",
                        border: "1px solid #E0E0E0",
                    }}
                >
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell key={column.field} align={column.align || "left"}>
                                {column.headerName}
                            </TableCell>
                        ))}
                        {actionButtons && <TableCell align="center">Actions</TableCell>}
                    </TableRow>
                </TableHead>
                <TableBody sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    {rows.slice(currentPage * currentRowsPerPage, currentPage * currentRowsPerPage + currentRowsPerPage).map((row, rowIndex) => (
                        <TableRow
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            key={rowIndex}>
                                                        {columns.map((column) => (
                                    <TableCell key={column.field} align={column.align || "left"}>
                                        {column.render ? column.render(row) : row[column.field]}
                                    </TableCell>
                                ))}
                            {actionButtons && (
                                <TableCell align="center">
                                    {actionButtons(row)}
                                </TableCell>
                            )}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        // <TablePagination
        //     rowsPerPageOptions={[5, 10, 25]}
        //     component="div"
        //     count={rows.length}
        //     rowsPerPage={currentRowsPerPage}
        //     page={currentPage}
        //     onPageChange={handleChangePage}
        //     onRowsPerPageChange={(event) => {
        //         setCurrentRowsPerPage(parseInt(event.target.value, 10));
        //         setCurrentPage(0);
        //     }}

    );
};

export default StudentDataGrid;

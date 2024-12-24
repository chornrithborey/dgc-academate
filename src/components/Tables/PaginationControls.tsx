import React from "react";
import { Stack, Chip } from "@mui/material";
import NavigateNext from "@mui/icons-material/NavigateNext";

interface PaginationControlsProps {
  page: number;
  rowsPerPage: number;
  totalRows: number;
  onPageChange: (page: number) => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  page,
  rowsPerPage,
  totalRows,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        justifyContent: "right",
        padding: "10px",
      }}
    >
      {[...Array(totalPages)].map((_, index) => (
        <Chip
          sx={{
            backgroundColor: page === index ? "primary.main" : "grey.300",
            color: page === index ? "white" : "black",
            borderRadius: 1.5,
            padding: "1px",
          }}
          size="small"
          onClick={() => onPageChange(index)}
          label={index + 1}
          key={index}
        />
      ))}
      <NavigateNext
        sx={{
          borderRadius: 1.5,
          cursor: "pointer",
          bgcolor: "grey.300",
          color: page === totalPages - 1 ? "white" : "black",
        }}
        onClick={() => onPageChange(Math.min(page + 1, totalPages - 1))}
      />
    </Stack>
  );
};

export default PaginationControls;
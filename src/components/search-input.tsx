import React from "react";
import { Paper, InputBase } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

const SearchInput: React.FC = () => (
  <Paper
    elevation={0}
    component="form"
    sx={{
      borderRadius: 1,
      elvation: 0,
      bgcolor: "#F1F1F1",
      p: "4px 4px",
      display: "flex",
      alignItems: "center",
      width: 400,
    }}
  >
    <SearchIcon sx={{ color: "#9E9E9E" }} />
    <InputBase
      sx={{ ml: 1, bgcolor: "#F1F1F1", color: "grey", flex: 1, elvation: 0 }}
      placeholder="Search . . ."
    />
  </Paper>
);

export default SearchInput;
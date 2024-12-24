import React from "react";
import {
  Stack,
  Grid2 as Grid,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import SearchInput from "./Input/SearchInput";
import FilterListIcon from "@mui/icons-material/FilterList";

interface BatchesDetailsProps {
  title: string;
  isSearch?: boolean;
  isFilter?: boolean;
  isExcelExport?: boolean;
}

const FilterButton = () => (
  <Stack direction="row" spacing={1}>
    <Button
      disableElevation
      sx={{ backgroundColor: "#C8E4FA", color: "#0D6DC5" }}
      variant="contained"
      startIcon={<FilterListIcon />}
    >
      Filter
    </Button>
  </Stack>
);

const ExcelExportButton = () => (
  <Stack direction="row" spacing={1}>
    <Button
      disableElevation
      sx={{ backgroundColor: "#3BB2D9" }}
      variant="contained"
      startIcon={
        <Avatar
          src="/assets/export-excel.svg"
          alt="Excel Export"
          sx={{ width: 20, height: 20 }}
        />
      }
    >
      Excel Export
    </Button>
  </Stack>
);

const BatchesDetails: React.FC<BatchesDetailsProps> = ({
  title,
  isSearch,
  isFilter,
  isExcelExport,
}) => (
  <Stack
    py={5}
    useFlexGap
    direction={"row"}
    alignItems={"end"}
    spacing={1}
    justifyContent={"space-between"}
  >
    <Grid>
      <Typography variant="subtitle1" fontWeight={600}>
        {title}
      </Typography>
    </Grid>

    <Grid container direction={"row"} spacing={1}>
      {
        isSearch && <SearchInput />
      }
      { 
        isFilter && <FilterButton />
      }
      { 
        isExcelExport && <ExcelExportButton />
      }
    </Grid>
  </Stack>
);

export default BatchesDetails;

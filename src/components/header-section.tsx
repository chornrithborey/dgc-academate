import React from "react";
import { Stack, Grid2 as Grid, Typography } from "@mui/material";
import SearchInput from "../components/search-input";

interface BatchesDetailsProps {
    title: string;
}

const BatchesDetails: React.FC<BatchesDetailsProps> = ({ title }) => (
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
        { title}
      </Typography>
    </Grid>

    <Grid>
      <SearchInput  />
    </Grid>
  </Stack>
);

export default BatchesDetails;
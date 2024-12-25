import React from "react";
import { Paper, Typography, Button } from "@mui/material";

interface BatchCardProps {
  title?: string;
  subtitle?: string;
  onButtonClick?: () => void;
}

const BatchCard: React.FC<BatchCardProps> = ({
  title = "12th Generation",
  subtitle = "Course: B.Tech Specialization in Health Informatics",
  onButtonClick,
}) => (
  <Paper
    elevation={0}
    sx={{
      elevation: 0,
      py: 3,
      px: 3,
      display: "flex",
      border: "1px solid #E6E6E6",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "start",
    }}
  >
    <Typography variant="h6" fontWeight={600} gutterBottom>
      {title}
    </Typography>
    <Typography variant="subtitle1" color="#919499" gutterBottom>
      {subtitle}
    </Typography>
    <Button
      sx={{ mt: 2 }}
      variant="contained"
      fullWidth
      disableElevation
      color="primary"
      onClick={onButtonClick}
    >
      View Details
    </Button>
  </Paper>
);

export default BatchCard;

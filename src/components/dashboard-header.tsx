import React from "react";
import { Stack, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface DashboardHeaderProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick?: () => void;
  buttonDisabled?: boolean;
  showButton?: boolean;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  title,
  subtitle,
  buttonText,
  onButtonClick,
  buttonDisabled = false,
  showButton = true,
}) => (
  <Stack direction="row" useFlexGap sx={{ justifyContent: "space-between" }}>
    <div>
      <Typography variant="h5" color="#055D7A" fontWeight={700}>
        {title}
      </Typography>
      <Typography color="#919499" fontWeight={400} variant="subtitle1">
        {subtitle}
      </Typography>
    </div>

    <Button
      size="large"
      variant="contained"
      disableElevation
      color="primary"
      startIcon={<AddIcon />}
      onClick={onButtonClick}
      disabled={buttonDisabled}
    >
      {showButton ? buttonText : ""}
    </Button>
  </Stack>
);

export default DashboardHeader;

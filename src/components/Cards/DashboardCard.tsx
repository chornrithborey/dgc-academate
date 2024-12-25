import React from "react";
import { Paper, Stack, Avatar, Typography } from "@mui/material";

interface DashboardCardProps {
  title: string;
  subtitle: string;
  iconPath: string;
  bgcolor?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  subtitle,
  iconPath,
  bgcolor,
}) => (
  <Paper elevation={0} sx={{ p: 2 }}>
    <Stack direction="column" spacing={2}>
      <Avatar
        src={iconPath}
        sx={{
          bgcolor: bgcolor,
          p: 1,
        }}
        variant="rounded"
      />
      <Typography fontWeight={400} color="text.secondary" variant="subtitle1">
        {title}
      </Typography>
      <Typography fontWeight={600} variant="h6">
        {subtitle}
      </Typography>
    </Stack>
  </Paper>
);

export default DashboardCard;
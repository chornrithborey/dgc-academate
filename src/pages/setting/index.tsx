import React from "react";
import {
  Avatar,
  Button,
  Container,
  Grid2 as Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DashboardHeader from "../../components/DashboardHeader";
import HeaderSection from "../../components/HeaderSection";
import TabsContainer from "../../components/Tabs/TabsContainer";
import TabPanel from "../../components/Tabs/TabPanel";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const SettingPage: React.FC = () => (
  <Container sx={{ py: 3 }}>
    <DashboardHeader
      title="Setting"
      subtitle="Edit your profile information"
      buttonText="Create"
      showButton={false}
    />
    <HeaderSection title="Account Details" />
    <TabsContainer tabLabels={["User profile", "User information", "Other"]}>
      <TabPanel value={0} index={0}>
        <Grid container direction="row" justifyContent="between">
          <Grid
            size={2}
            container
            direction="column"
            justifyContent="start"
            alignItems="center"
          >
            <Avatar
              sizes="large"
              src="/assets/setting/avatar.svg"
              sx={{
                width: "150px",
                height: "150px",
                marginBottom: "1rem",
              }}
            />
            <Typography variant="h6" align="center">
              Boran Pol
            </Typography>
            <Typography variant="body2" align="center">
              boranpol@gmail.com
            </Typography>
          </Grid>
          <Grid size={1}></Grid>
          <Grid size={9}>
            <Typography variant="h5">Profile Information</Typography>
            <Grid container spacing={2}>
              <Grid size={6}>
                <InputLabel
                  sx={{
                    color: "text.primary",
                    fontWeight: "bold",
                  }}
                >
                  First Name
                  <span style={{ color: "red" }}>*</span>
                </InputLabel>
                <TextField placeholder="First Name" fullWidth required />
              </Grid>
              <Grid size={6}>
                <InputLabel
                  sx={{
                    color: "text.primary",
                    fontWeight: "bold",
                  }}
                >
                  Last Name <span style={{ color: "red" }}>*</span>
                </InputLabel>
                <TextField placeholder="Last Name" fullWidth required />
              </Grid>
              <Grid size={6}>
                <InputLabel
                  sx={{
                    color: "text.primary",
                    fontWeight: "bold",
                  }}
                >
                  Phone number <span style={{ color: "red" }}>*</span>
                </InputLabel>
                <TextField placeholder="088 52 63 728" fullWidth required />
              </Grid>
              <Grid size={6}>
                <InputLabel
                  sx={{
                    color: "text.primary",
                    fontWeight: "bold",
                  }}
                >
                  Gender <span style={{ color: "red" }}>*</span>
                </InputLabel>
                <Select fullWidth required>
                  <MenuItem value={1}>Male</MenuItem>
                  <MenuItem value={2}>Female</MenuItem>
                </Select>
              </Grid>
              <Grid size={12}>
                <InputLabel
                  sx={{
                    color: "text.primary",
                    fontWeight: "bold",
                  }}
                >
                  Date of birth <span style={{ color: "red" }}>*</span>
                </InputLabel>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker sx={{ width: "100%" }} onChange={() => {}} />
                </LocalizationProvider>
              </Grid>
              <Grid
                size={12}
                container
                justifyContent="flex-end"
                sx={{ padding: "1rem 0" }}
              >
                <Button
                  sx={{ px: 10 }}
                  size="large"
                  variant="contained"
                  disableElevation
                >
                  Update
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
    </TabsContainer>
  </Container>
);

export default SettingPage;

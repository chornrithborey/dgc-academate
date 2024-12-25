import React from "react";
import { Container } from "@mui/material";
import DashboardHeader from "../../components/DashboardHeader";
import HeaderSection from "../../components/HeaderSection";

const CalendarPage: React.FC = () => (
    <Container sx={{ py: 3}}>
        <DashboardHeader
            title="Calendar"
            subtitle="Manage and organize your events"
            buttonText="Create Event"
            onButtonClick={() => console.log("Create event")}
        />
        <HeaderSection title="Event Details" />

    </Container>
);

export default CalendarPage;

import React from "react";

import DashboardCard from './dashboardCard';

import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";

export default function Dashboard() {
    return (
        <Container maxWidth="md" className="dashboard">
            <Typography variant="h4" component="h2" sx={{ flexGrow: 1, fontweight: 500 }}>
                Welcome User!
            </Typography>
            <div className="dashboard-cards">
                <DashboardCard />
                <DashboardCard />
                <DashboardCard />
            </div>
            <Typography variant="h5" component="h2" sx={{ flexGrow: 1, fontweight: 500 }}>
                System Notifications:
            </Typography>
        </Container>
    )
}
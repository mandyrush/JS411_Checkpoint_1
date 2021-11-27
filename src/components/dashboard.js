import React from "react";
import { useState } from "react";

import DashboardCard from './dashboardCard';
import BasicSwitch from './BasicSwitch';
import BasicSlider from './BasicSlider';
import BasicSelect from './BasicSelect';

import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";

export default function Dashboard() {
    const [isOnline, setIsOnline] = useState(true);
    const [masterVolume, setMasterVolume] = useState(30);
    const [soundQuality, setSoundQuality] = useState('normal');

    return (
        <Container maxWidth="md" className="dashboard">
            <Typography variant="h4" component="h2" sx={{ flexGrow: 1, fontweight: 500 }}>
                Welcome User!
            </Typography>
            <div className="dashboard-cards">
                <DashboardCard
                    title="Online Mode"
                    body="Is this application connected to the internet?"
                    state={isOnline}
                    setState={setIsOnline}
                    component={BasicSwitch} />
                <DashboardCard
                    title="Master Volume"
                    body="Overrides all other sound settings in this application."
                    state={masterVolume}
                    setState={setMasterVolume}
                    component={BasicSlider} />
                <DashboardCard
                    title="Sound Quality"
                    body="Manually control the music quality in event of poor connection."
                    state={soundQuality}
                    setState={setSoundQuality}
                    component={BasicSelect} />
            </div>
            <Typography variant="h5" component="h2" sx={{ flexGrow: 1, fontweight: 500 }}>
                System Notifications:
            </Typography>
            <ol>
                {!isOnline && <li>Your application is offline. You won't be able to share or stream music to other devices.</li>}
                {masterVolume >= 90 && <li>Listening to music at a high volume could cause long-term hearing loss.</li>}
                {soundQuality === 'low' && <li>Music quality is degraded. Increase quality if your connection allows it.</li>}
            </ol>
        </Container>
    )
}
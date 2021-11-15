import React from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function DashboardCard() {
    return (
        <Card sx={{ flexGrow: 1 }} className="card">
            <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                    Title
                </Typography>
                <Typography variant="body2">
                    Body
                </Typography>
            </CardContent>
            <CardActions>
                Button
            </CardActions>
        </Card>
    )
}
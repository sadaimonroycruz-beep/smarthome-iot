import { Grid, Box } from "@mui/material";

import PageContainer from "../../components/common/PageContainer";
import StatCard from "../../components/StatCard/StatCard";
import SensorChart from "../../components/Dashboard/SensorChart";

const sensorData = [
    {time: "12:00", temp: 19, gas: 10},
    {time: "12:10", temp: 20, gas: 15},
    {time: "12:20", temp: 21, gas: 20},
    {time: "12:30", temp: 22, gas: 25},
    {time: "12:40", temp: 23, gas: 30}
]

export default function Dashboard(){
    return(
        <PageContainer title="Dashboard">

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} lg={3}>
                    <StatCard title="Devices" value="20" />
                </Grid>

                <Grid item xs={12} sm={6} lg={3}>
                    <StatCard title="Active" value="15" />
                </Grid>

                <Grid item xs={12} sm={6} lg={3}>
                    <StatCard title="Alerts" value="5" />
                </Grid>

                <Grid item xs={12} sm={6} lg={3}>
                    <StatCard title="Users" value="4" />
                </Grid>
            </Grid>

            <Grid item xs={12} sx={{mt:2}}>
                <Box sx={{height:300}}>
                    <SensorChart data={sensorData}/>
                </Box>
            </Grid>

        </PageContainer>
    );
}
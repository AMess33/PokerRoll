import React from "react";
import Graph from "./graphComponent";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useGetAllSessions } from "./queries/helpers";
import { useUser } from "@clerk/clerk-react";

const PastSession = (props) => {
    const sessionsQuery = useGetAllSessions()
    console.log(sessionsQuery);

    return sessionsQuery.data?.map(session => {
            return (
                <Container maxWidth="sm">
                    <Box>
                        <h4>session.startTime</h4>
                        <p>session.game</p>
                        <p>session.casino</p>
                        <span>session.plusMinus</span>
                    </Box>
                </Container>
    )
})};

const Bankroll = (props) => {
    const { user } = useUser();

    return (
        <div>
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#cfe8fc', height: '50vh' }}>
                    <h3>{user.Bankroll}</h3>
                <Graph />
                {/* Current Bankroll amount at top */}
                {/* display a graph of bankroll change over time */}
                {/* buttons to change timeframe */}
                {/* past month/ 6 months/ ytd/ all time */}
                </Box>
                <PastSession />
            </Container>
        </div>
    )
}
export default Bankroll;
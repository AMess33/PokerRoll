import React from "react";
import Graph from "./graphComponent";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useGetAllSessions } from "./queries/helpers";
import { useUser } from "@clerk/clerk-react";
import BankrollHeader from './bankrollHeader';



const Bankroll = (props) => {

    return (
        <div>
            <BankrollHeader />
            <Graph />
            <PastSession />
        </div>
    )
}

const PastSession = (data) => {
    const sessionsQuery = useGetAllSessions()

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
export default Bankroll;
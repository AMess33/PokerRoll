import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useGetAllSessions } from "./queries/helpers";

const PastSession = () => {
    const sessionsQuery = useGetAllSessions()

    return sessionsQuery.data?.map((session) => {
            return (
                <Container maxWidth="sm">
                    <Box>
                        <h4>{session.startTime}</h4>
                        <p>{session.game}</p>
                        <p>{session.casino}</p>
                        <span>{session.plusMinus}</span>
                    </Box>
                </Container>
    )
})};

const History = (props) => {

    return (
        <div>
            <PastSession />
        </div>
    )
}
export default History;
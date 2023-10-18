import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useGetAllSessions } from "./queries/helpers";

// history page will show all past sessions

const PastSession = () => {
    const sessionsQuery = useGetAllSessions()

    return sessionsQuery.data?.map((session) => {
            return (
                <Container maxWidth="sm">
                    <Box>
                        <h4>{sessionsQuery.data?.startTime}</h4>
                        <p>{sessionsQuery.data?.game}</p>
                        <p>{sessionsQuery.data?.casino}</p>
                        <span>{sessionsQuery.data?.plusMinus}</span>
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
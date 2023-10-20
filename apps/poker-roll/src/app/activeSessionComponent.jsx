import React from "react";
import { Box, Button, Container } from "@mui/material";
import { useGetAllSessions } from "./queries/helpers";
import updateSessionForm from "./updateSessionComponent";

// get all sessions without an 'endTime' and display them as Active Sessions on the homepage

const ActiveSession = () => {
    const sessionsQuery = useGetAllSessions()

    return sessionsQuery.data?.map(session => {
        return (
            <Container maxWidth="sm">
                <Box>
                    <h4>{session.game}</h4>
                    <p>{session.casino}, {session.location}</p>
                    <Button
                    type="button"
                    onClick={<updateSessionForm/>}
                    size="small"
                    variant="contained"
                    color="primary"
                    >
                        Finish Session
                    </Button>
                </Box>
            </Container>
        )
    })
}

module.exports = ActiveSession;
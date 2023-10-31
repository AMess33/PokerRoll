import React from 'react';
import { Box, Button, Container } from '@mui/material';
import { useGetAllSessions } from './queries/helpers';
import UpdateSessionForm from './updateSessionComponent';

// get all sessions without an 'endTime' and display them as Active Sessions on the homepage

const ActiveSession = (props) => {
  const [isUpdating, setIsUpdating] = React.useState(false);

  const finishSession = (event, isFinished) => {
    setIsUpdating(true);
  };
  return (
    <Container
      style={{ border: '2px solid rgba(0, 0, 0, 0.05)' }}
      maxWidth="sm"
    >
      <Box>
        <h4>{props.session.game}</h4>
        <p>
          {props.session.casino}, {props.session.location}
        </p>
        <Button
          type="button"
          onClick={finishSession}
          size="small"
          variant="contained"
          color="primary"
        >
          Finish Session
        </Button>
      </Box>
      {isUpdating && <UpdateSessionForm />}
    </Container>
  );
};
const ActiveSessionContainer = () => {
  const sessionsQuery = useGetAllSessions();
  return sessionsQuery.data?.map((session) => {
    return <ActiveSession session={session} />;
  });
};

export default ActiveSessionContainer;

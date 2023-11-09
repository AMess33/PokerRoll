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
    <div>
      <h2>Active Sessions</h2>
      <Container
        style={{ border: '2px solid rgba(0, 0, 0, 0.5)' }}
        maxWidth="sm"
      >
        <Box sx={{ m: 1 }} textAlign={'center'}>
          <h4 style={{ margin: '0' }}>{props.session.game}</h4>
          <div>
            {props.session.casino}, {props.session.location}
          </div>
          <Button
            type="button"
            onClick={finishSession}
            size="small"
            variant="contained"
            color="primary"
            justifyContent="center"
          >
            Finish Session
          </Button>
        </Box>
        {isUpdating && <UpdateSessionForm session={props.session} />}
      </Container>
    </div>
  );
};
const ActiveSessionContainer = () => {
  const sessionsQuery = useGetAllSessions();
  return sessionsQuery.data?.map((session) => {
    if (session.endTime) {
      return null;
    }
    return <ActiveSession key={session._id} session={session} />;
  });
};

export default ActiveSessionContainer;

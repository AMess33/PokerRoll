import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useGetAllSessions } from './queries/helpers';

const dayjs = require('dayjs');

// history page will show all past sessions

const PastSession = () => {
  const sessionsQuery = useGetAllSessions();

  return sessionsQuery.data?.map((session) => {
    if (!session.endTime) {
      return null;
    }
    const start = dayjs(session.startTime);
    const end = dayjs(session.endTime);
    const duration = end.diff(`${start}`, 'hour', true).toFixed('1');
    const formatDate = dayjs(session.startTime).format('MM/DD/YY');

    return (
      <Container maxWidth="sm">
        <Box>
          <h4>{formatDate}</h4>
          <p>{session.game}</p>
          <p>
            {session.casino}, {session.location}
          </p>
          <span>{duration} Hours</span>
          <span>{session.plusMinus}</span>
        </Box>
      </Container>
    );
  });
};

const History = (props) => {
  return (
    <div>
      <PastSession />
    </div>
  );
};
export default History;

import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useGetAllSessions } from './queries/helpers';

const dayjs = require('dayjs');

// history page will show all past sessions

const PastSession = () => {
  const sessionsQuery = useGetAllSessions();

  return sessionsQuery.data
    ?.filter((session) => session.endTime)
    .map((session) => {
      const start = dayjs(session.startTime);
      const end = dayjs(session.endTime);
      const duration = end.diff(start, 'hour', true).toFixed('1');
      const formatDate = dayjs(session.startTime).format('MM/DD/YY');
      const inFor = Number(`${session.buyIn}`);
      const outFor = Number(`${session.outFor}`);
      const plusMinus = Math.floor(outFor - inFor);
      const perHour = Math.floor(plusMinus / duration);

      return (
        <Container
          sx={{ mt: 2 }}
          style={{ border: '2px solid rgba(0, 0, 0, 0.5)' }}
          maxWidth="sm"
          key={session._id}
        >
          <Box>
            <h4 style={{ margin: '0', textAlign: 'center' }}>
              {formatDate} {session.game}
            </h4>
            <div>
              {session.casino}, {session.location}
            </div>
            <span> {duration} Hours </span>
            <span> ${plusMinus} </span>
            <span> ${perHour} /hour</span>
          </Box>
        </Container>
      );
    });
};

const History = (props) => {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Completed Sessions</h2>
      <PastSession />
    </div>
  );
};
export default History;

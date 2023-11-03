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
    const duration = end.diff(start, 'hour', true).toFixed('1');
    const formatDate = dayjs(session.startTime).format('MM/DD/YY');
    const inFor = Number(`${session.buyIn}`);
    const outFor = Number(`${session.outFor}`);
    const plusMinus = Math.floor(outFor - inFor);
    const perHour = Math.floor(plusMinus / duration);

    return (
      <div key={session.id}>
        <Container
          style={{ border: '2px solid rgba(0, 0, 0, 0.5)' }}
          maxWidth="sm"
        >
          <Box>
            <h4>{formatDate}</h4>
            <p>{session.game}</p>
            <p>
              {session.casino}, {session.location}
            </p>
            <span> {duration} Hours </span>
            <span> ${plusMinus} </span>
            <span> ${perHour} /hour</span>
          </Box>
        </Container>
      </div>
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

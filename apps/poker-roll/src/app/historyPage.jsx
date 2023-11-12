import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useGetAllSessions } from './queries/helpers';

const dayjs = require('dayjs');

// history page will show all past sessions

const PastSession = (props) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const start = dayjs(props.session.startTime);
  const end = dayjs(props.session.endTime);
  const duration = end.diff(start, 'hour', true).toFixed('1');
  const formatDate = dayjs(props.session.startTime).format('MM/DD/YY');
  const inFor = Number(`${props.session.buyIn}`);
  const outFor = Number(`${props.session.outFor}`);
  const plusMinus = Math.floor(outFor - inFor);
  const perHour = Math.floor(plusMinus / duration);

  return (
    <div className="accordions">
      <Accordion
        expanded={expanded === props.session._id}
        onChange={handleChange(props.session._id)}
        sx={{
          backgroundColor: 'gold',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{
              width: '33%',
              flexShrink: 0,
              color: 'blue',
              fontWeight: 'bold',
              borderColor: 'gold',
            }}
          >
            {props.session.casino}
          </Typography>
          <Typography sx={{ width: '75%', color: 'text.secondary' }}>
            {props.session.game}
          </Typography>
          <Typography sx={{ width: '90%', color: 'text.secondary' }}>
            {formatDate}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span>{props.session.location}</span>
            <br />
            {duration} Hours &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Profit: ${plusMinus}{' '}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${perHour} /hour
            <br />
            <span>{props.session.notes}</span>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
const PastSessionContainer = () => {
  const sessionsQuery = useGetAllSessions();
  return sessionsQuery.data?.map((session) => {
    return <PastSession key={session._id} session={session} />;
  });
};

export default PastSessionContainer;

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

    const start = dayjs(props.session.startTime);
    const end = dayjs(props.session.endTime);
    const duration = end.diff(start, 'hour', true).toFixed('1');
    const formatDate = dayjs(props.session.startTime).format('MM/DD/YY');
    const inFor = Number(`${props.session.buyIn}`);
    const outFor = Number(`${props.session.outFor}`);
    const plusMinus = Math.floor(outFor - inFor);
    const perHour = Math.floor(plusMinus / duration);

    return (
      <div>
        <h2>Completed Sessions</h2>
        <Accordion
          expanded={expanded === props.session._id}
          onChange={handleChange(props.session._id)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              {formatDate}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              {props.session.game}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div>
                {props.session.casino}, {props.session.location}
              </div>
              <span> {duration} Hours </span>
              <span> ${plusMinus} </span>
              <span> ${perHour} /hour</span>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  };
};
const PastSessionContainer = () => {
  const sessionsQuery = useGetAllSessions();
  return sessionsQuery.data?.map((session) => {
    return <PastSession key={session._id} session={session} />;
  });
};

export default PastSessionContainer;

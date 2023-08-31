import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


function PastSession(props){
    return (
        <div>
            <Container maxWidth="sm">
                <Box>
                    <h4>Date</h4>
                    <p>GAME Played</p>
                    <span>+- result</span>
                </Box>
            {/* show info of previous sessions */}
            {/* date/ location/ game type/ plus/minus of session */}
            </Container>
        </div>
    )
}
const Bankroll = (props) => {

    return (
        <div>
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#cfe8fc', height: '50vh' }} />
                {/* Current Bankroll amount at top */}
                {/* display a graph of bankroll change over time */}
                {/* buttons to change timeframe */}
                {/* past month/ 6 months/ ytd/ all time */}
                <PastSession />
            </Container>
        </div>
    )
}
export default Bankroll;
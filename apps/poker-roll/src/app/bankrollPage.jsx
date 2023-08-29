import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


function PastSession(){
    return (
        <div>
            {/* show info of previous sessions */}
            {/* date/ location/ game type/ plus/minus of session */}
        </div>
    )
}
const Bankroll = (props) => {

    return (
        <div>
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
                {/* Current Bankroll amount at top */}
                {/* display a graph of bankroll change over time */}
                {/* buttons to change timeframe */}
                {/* past month/ 6 months/ ytd/ all time */}
            </Container>
        </div>
    )
}
export default Bankroll;
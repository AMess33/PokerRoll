import React from "react";
import Graph from "./graphComponent";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


function PastSession(props){
    const query = useQuery({ queryKey: ['sessions'], queryFn: getSessions })

    return (
        <div>
            {query.data?.map((session) => (
            <Container maxWidth="sm">
                <Box>
                    <h4>session.startTime</h4>
                    <p>session.game</p>
                    <p>session.casino</p>
                    <span>session.plusMinus</span>
                </Box>
            {/* show info of previous sessions */}
            {/* date/ location/ game type/ plus/minus of session */}
            </Container>
            ))}
        </div>
    )
}
const Bankroll = (props) => {

    return (
        <div>
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#cfe8fc', height: '50vh' }}>
                <Graph />
                {/* Current Bankroll amount at top */}
                {/* display a graph of bankroll change over time */}
                {/* buttons to change timeframe */}
                {/* past month/ 6 months/ ytd/ all time */}
                </Box>
                <PastSession />
            </Container>
        </div>
    )
}
export default Bankroll;
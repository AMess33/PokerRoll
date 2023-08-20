import React from "react";
import { Outlet } from "react-router-dom";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TableBarIcon from '@mui/icons-material/TableBar';
import PaidIcon from '@mui/icons-material/Paid';

const Home = (props) => {

    return (
        <div>
            <div className="header">
                <h1>Poker Roll</h1>
            </div>
            <div>
                <Outlet />
            </div>
            <div className="footer">
            <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="BankRoll" icon={<PaidIcon />} />
        <BottomNavigationAction label="CashGames" icon={<TableBarIcon />} />
        <BottomNavigationAction label="Tournament" icon={<EmojiEventsIcon />} />
      </BottomNavigation>
    </Box>
            </div>
        </div>
    )
};


export default Home;
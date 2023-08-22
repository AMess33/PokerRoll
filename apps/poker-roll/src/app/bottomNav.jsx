import React from "react";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TableBarIcon from '@mui/icons-material/TableBar';
import PaidIcon from '@mui/icons-material/Paid';

export default function BottomNav() {
    const [value, setValue] = React.useState(0);
  
    return (
        <div className="footer">
            <Box sx={{ width: 500 }}>
                <BottomNavigation
                 showLabels
                 value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                    <BottomNavigationAction href="/bankroll" label="BankRoll"  icon={<PaidIcon />} />
                    <BottomNavigationAction href="/cashgame" label="CashGames"  icon={<TableBarIcon />} />
                    <BottomNavigationAction href="/tournament" label="Tournament"  icon={<EmojiEventsIcon />} />
                </BottomNavigation>
             </Box>
        </div>
    );
}

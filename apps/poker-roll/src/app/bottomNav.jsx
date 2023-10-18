import React, { useState } from "react";
import { 
    BrowserRouter as Router,
    Outlet,
    Switch,
    useLocation,
    useNavigate
} from "react-router-dom";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TableBarIcon from '@mui/icons-material/TableBar';
import PaidIcon from '@mui/icons-material/Paid';

export default function BottomNav() {
        const location = useLocation();
        const navigate = useNavigate();
    
        const handleNavigation = (newValue) => {
            navigate(newValue);
        };
    
    return (
        <div className="footer">
            <Box sx={{ width: 500 }}>
                <BottomNavigation
                 showLabels
                 value={location.pathname}
                 onChange={(event, newValue) => {
                    handleNavigation(newValue);
                }}
            >
                    <BottomNavigationAction value="/bankroll" label="BankRoll"  icon={<PaidIcon />} />
                    <BottomNavigationAction value="/cashgame" label="New Session"  icon={<TableBarIcon />} />
                    <BottomNavigationAction value="/tournament" label="History"  icon={<EmojiEventsIcon />} />
                </BottomNavigation>
             </Box>
        </div>
    );
}

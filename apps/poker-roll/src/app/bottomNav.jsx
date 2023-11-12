import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Outlet,
  Switch,
  useLocation,
  useNavigate,
} from 'react-router-dom';
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
    <BottomNavigation
      sx={{
        width: 1,
        position: 'fixed',
        bottom: 0,
      }}
      showLabels
      value={location.pathname}
      onChange={(event, newValue) => {
        handleNavigation(newValue);
      }}
    >
      <BottomNavigationAction
        sx={{
          color: '#0288d1',
          bgcolor: '#bdbdbd',
          border: 2,
          borderColor: '#0288d1',
        }}
        value="/bankroll"
        label="BankRoll"
        icon={<PaidIcon />}
      />
      <BottomNavigationAction
        sx={{
          color: '#0288d1',
          bgcolor: '#bdbdbd',
          border: 2,
          borderColor: '#0288d1',
        }}
        value="/session"
        label="New Session"
        icon={<TableBarIcon />}
      />
      <BottomNavigationAction
        sx={{
          color: '#0288d1',
          bgcolor: '#bdbdbd',
          border: 2,
          borderColor: '#0288d1',
        }}
        value="/history"
        label="History"
        icon={<EmojiEventsIcon />}
      />
    </BottomNavigation>
  );
}

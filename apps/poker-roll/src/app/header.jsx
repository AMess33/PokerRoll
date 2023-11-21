import React from 'react';
import { UserButton } from '@clerk/clerk-react';
// build app header
// place logo
// add user profile picture from clerk

const AppHeader = () => {
  return (
    <div>
      <img
        src="../assets/images/poker-roll-high-resolution-logo.png"
        alt="Poker Roll Logo"
        width={'100%'}
        height={'250px'}
      ></img>
      <div className="userImage">
        <UserButton />
      </div>
    </div>
  );
};

export default AppHeader;

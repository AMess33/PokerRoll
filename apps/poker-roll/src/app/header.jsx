import React from 'react';
import { useUser } from '@clerk/clerk-react';
// build app header
// place logo
// add user profile picture from clerk

const AppHeader = () => {
  const { user } = useUser();
  const userImage = user.imageUrl;
  return (
    <div>
      <img
        src="../assets/images/poker-roll-high-resolution-logo.png"
        alt="Poker Roll Logo"
        width={'100%'}
        height={'250px'}
      ></img>
      <img className="userImage" src={userImage} alt="Your Profile"></img>
    </div>
  );
};

export default AppHeader;

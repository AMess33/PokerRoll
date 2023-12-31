import * as React from 'react';
import BottomNav from './bottomNav';
import ActiveSession from './activeSessionComponent';
import AppHeader from './header';
import Welcome from './welcome';
import { BrowserRouter as Router, Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
} from '@clerk/clerk-react';
import { Box, CssBaseline } from '@mui/material';

if (!process.env.NX_CLERK_PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

const clerkPubKey = process.env.NX_CLERK_PUBLISHABLE_KEY;
const queryClient = new QueryClient();

function PokerRoll() {
  return (
    <QueryClientProvider client={queryClient}>
      <ClerkProvider publishableKey={clerkPubKey}>
        <CssBaseline>
          <Home />
        </CssBaseline>
      </ClerkProvider>
    </QueryClientProvider>
  );
}

//   homepage displays App Name Header, Active Sessions, OUTLET (Bankroll, new session, history), Bottom Nav
// show ACTIVE sessions that do not have an end time, so they may be updated X
// click on active session will bring up update/edit session form X

function Home() {
  const { isLoaded } = useUser();
  if (!isLoaded) {
    return null;
  }
  return (
    <div>
      <SignedIn>
        <div>
          <div>
            <AppHeader />
          </div>
          <div>
            <ActiveSession />
          </div>
          <div>
            <Welcome />
          </div>
          <div>
            <Outlet />
          </div>
          <div>
            <BottomNav />
          </div>
          <Box sx={{ height: '60px' }}></Box>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
}

export default PokerRoll;

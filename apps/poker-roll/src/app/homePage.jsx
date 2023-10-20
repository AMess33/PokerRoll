import * as React from 'react';
import BottomNav from "./bottomNav";
import ActiveSession from "./activeSessionComponent";
import { 
    BrowserRouter as Router,
    Outlet,
} from "react-router-dom";
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    UserButton,
    useUser,
    RedirectToSignIn,
  } from "@clerk/clerk-react";

if (!process.env.NX_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
  }

const clerkPubKey = process.env.NX_CLERK_PUBLISHABLE_KEY;
const queryClient = new QueryClient()

function PokerRoll() {

    return (
      <QueryClientProvider client={queryClient}>
        <ClerkProvider publishableKey={clerkPubKey}>
            <Home />
        </ClerkProvider>
      </QueryClientProvider>
    )
  }

//   homepage displays App Name Header, OUTLET (Bankroll, new session, history), Bottom Nav, also display any un ended sessions to be updated 
// show ACTIVE sessions that do not have an end time, so they may be updated
// click on active session will bring up update/edit session form


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
                        <h1>Poker Roll</h1>
                    </div>
                    <div>
                        <ActiveSession/>
                    </div>
                    <div>
                        <Outlet />
                    </div>
                    <div>
                        <BottomNav />
                    </div>
                </div>
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </div>
    )
            
};


export default PokerRoll;
import * as React from 'react';
import BottomNav from "./bottomNav";
import BankrollHeader from './bankrollHeader';
import NewSession from './startSession';
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
                        <NewSession />
                    </div>
                    <div>
                        <BankrollHeader />
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
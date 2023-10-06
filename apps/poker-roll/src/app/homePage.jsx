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

const queryClient = new QueryClient()
function PokerRoll() {
    return (
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    )
  }
function Home() {

    return (
            <div>
                <div>
                    <h1>Poker Roll</h1>
                </div>
                <div>
                    <NewSession />
                </div>
                <div className='mainContent'>
                    <BankrollHeader />
                </div>
                <div>
                    <Outlet />
                </div>
                <div>
                    <BottomNav />
                </div>
            </div>
            )
            
};


export default PokerRoll;
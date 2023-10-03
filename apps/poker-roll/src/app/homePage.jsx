import * as React from 'react';
import BottomNav from "./bottomNav";
import SessionForm from './startSession';
import BankrollHeader from './bankrollHeader';
import { 
    BrowserRouter as Router,
    Outlet,
    Switch,
    useLocation
} from "react-router-dom";
import {
    useQuery,
    useMutation,
    userQueryClient,
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
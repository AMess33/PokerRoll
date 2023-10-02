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
import {
    getUser,
    createUser,
    updateUser,
    deleteUser,
    createSession,
    updateSession
} from "../../../server/src/routes/index";
import { startSession } from 'apps/server/src/models/Session';

const queryClient = new QueryClient()
function PokerRoll() {
    return (
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    )
  }
function Home() {
    // access the client
    const queryClient = useQueryClient()
    // queries 
    const query = useQuery({ queryKey: ['user'], queryFn: getUser })
    // mutations
    const mutation = useMutation({
        mutationFn: createSession,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['sessions']})
        },
    })

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
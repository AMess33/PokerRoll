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

// import { ThemeProvider, createTheme } from '@mui/material/styles';

// const darkTheme = createTheme({
//     palette: {
//       mode: 'dark',
//     },
//   });


const Home = (props) => {
    

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


export default Home;
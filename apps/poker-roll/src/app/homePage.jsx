import * as React from 'react';
import BottomNav from "./bottomNav";
import SessionForm from './startSession';
import { 
    BrowserRouter as Router,
    Outlet,
    Switch,
    useLocation
} from "react-router-dom";

import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


const Home = (props) => {
    

    return (
        <ThemeProvider theme={darkTheme}>
            <div>
                <div>
                    <h1>Poker Roll</h1>
                </div>
                <div>
                    <SessionForm />
                </div>
                <div>
                    <Outlet />
                </div>
                <div>
                    <BottomNav />
                </div>
            </div>
        </ThemeProvider>    
            )
            
};


export default Home;
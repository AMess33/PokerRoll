import * as React from 'react';
import BottomNav from "./bottomNav";
import { 
    BrowserRouter as Router,
    Outlet,
    Switch,
    useLocation
} from "react-router-dom";


const Home = (props) => {
    

    return (
        <div>
            <div className="header">
                <h1>Poker Roll</h1>
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
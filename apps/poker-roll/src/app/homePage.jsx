import React from "react";
import BottomNav from "./bottomNav";
import { 
    BrowserRouter as Router,
    Outlet,
    Switch,
    useParams 
} from "react-router-dom";



//  use the  userParams hook to set the value of the bottom nav based on page path

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
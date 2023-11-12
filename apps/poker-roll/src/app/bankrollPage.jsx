import React from "react";
import Graph from "./graphComponent";
import BankrollHeader from './bankrollHeader';

// bankroll page will display current bankroll, graph of bankroll overtime
const Bankroll = () => {

    return (
        <div>
            <div>
                <BankrollHeader />
            </div>
            <div>
                <Graph />
            </div>
        </div>
    )
}


export default Bankroll;
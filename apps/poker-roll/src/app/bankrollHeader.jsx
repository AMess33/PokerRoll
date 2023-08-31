import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const BankrollHeader = (props) => {

    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                            Current BankRoll: {props.bankroll}
                    </Typography>
                    <Button variant="text">Add</Button>
                    <Button variant="text">Subtract</Button>
                </CardContent>    
            </Card>
        </div>
    )
}
export default BankrollHeader;
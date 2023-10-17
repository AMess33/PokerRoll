import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useUser } from "@clerk/clerk-react";
import { useBankroll } from "./queries/helpers";

const BankrollHeader = (props) => {
    const { user } = useUser();
    const bankrollQuery = useBankroll();
    console.log(bankrollQuery);
    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        Welcome {user.firstName}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                            Current BankRoll: ${bankrollQuery.data?.amount}
                    </Typography>
                    <Button variant="text">Add</Button>
                    <Button variant="text">Subtract</Button>
                </CardContent>    
            </Card>
        </div>
    )
}
export default BankrollHeader;
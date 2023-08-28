import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Bankroll = (props) => {

    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Current BankRoll Balance: $0.00
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Click to expand to view bankroll over time
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Update Bankroll
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}
export default Bankroll;
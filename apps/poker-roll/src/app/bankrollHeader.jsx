import React, {useState } from "react";
import { Card, CardContent, Typography, Button, TextField} from '@mui/material';
import { useUser } from "@clerk/clerk-react";
import { useBankroll, useUpdateBankroll } from "./queries/helpers";

const BankrollHeader = () => {
    const [formState, setFormState] = useState({
        amount: "",
      });
      const mutation = useUpdateBankroll();
      const handleChange = (event) => {
        const { name, valueAsNumber } = event.target;

        setFormState({
            ...formState,
            [name]: valueAsNumber,
        });
      }
    const { user } = useUser();
    const bankrollQuery = useBankroll();
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
                    <TextField 
            label="Amount"
            variant="outlined"
            name="amount"
            type="number"
            value={formState.amount}
            onChange={handleChange}
            size="small"
            margin="normal"
          />
                    <Button 
                        type="button"
                        onClick={() => {(mutation.mutate(formState))}}
                        size="small"
                    variant="contained"
                    color="primary"
                    >Add</Button>
                    <Button variant="text">Subtract</Button>
                </CardContent>    
            </Card>
        </div>
    )
}
export default BankrollHeader;
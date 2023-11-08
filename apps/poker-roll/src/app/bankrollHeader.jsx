import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
} from '@mui/material';
import { useUser } from '@clerk/clerk-react';
import { useBankroll, useUpdateBankroll } from './queries/helpers';

// add a notes field for bankroll editing

const BankrollHeader = () => {
  const [formState, setFormState] = useState({
    amount: '',
  });
  const mutation = useUpdateBankroll();
  const handleChange = (event) => {
    const { name, valueAsNumber } = event.target;

    setFormState({
      ...formState,
      [name]: valueAsNumber,
    });
  };
  const { user } = useUser();
  const bankrollQuery = useBankroll();
  return (
    <div>
      <Card sx={{ textAlign: 'center' }}>
        <CardContent>
          <Typography variant="h4" component="div">
            {user.firstName}'s Bankroll: ${bankrollQuery.data?.amount}
          </Typography>
          <TextField
            sx={{ width: '50%' }}
            label="Add or Subtract from your Bankroll"
            variant="outlined"
            name="amount"
            type="number"
            value={formState.amount}
            onChange={handleChange}
            size="small"
            margin="normal"
          />
          <div>
            <Button
              type="button"
              onClick={() => {
                mutation.mutate(formState);
              }}
              size="small"
              variant="contained"
              color="primary"
            >
              Update Bankroll
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default BankrollHeader;

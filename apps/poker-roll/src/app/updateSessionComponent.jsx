import React, { useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';
import { useUpdateSession } from './queries/helpers';

function UpdateSessionForm(props) {
  // set initial form state based on previously input session info when session was created
  // use helper functions to automatically set endTime, plusMinus, duration properties when 'finish session' button is hit
  // 'finish session' button should also create a new bankroll entry to properly update bankroll graph
  const [formState, setFormState] = useState({
    id: props.session._id,
    buyIn: '',
    outFor: '',
    notes: '',
  });
  const mutation = useUpdateSession();
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  return (
    <Stack
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <TextField
        label="Total In For"
        variant="outlined"
        name="buyIn"
        type="text"
        value={formState.buyIn}
        onChange={handleChange}
        size="small"
        margin="normal"
      />
      <TextField
        label="Cash Out Total"
        variant="outlined"
        name="outFor"
        type="text"
        value={formState.outFor}
        onChange={handleChange}
        size="small"
        margin="normal"
      />
      <TextField
        label="Notes"
        variant="outlined"
        name="notes"
        type="text"
        value={formState.notes}
        onChange={handleChange}
        size="small"
        margin="normal"
      />
      <Button
        type="button"
        onClick={() => {
          mutation.mutate(formState);
        }}
        size="small"
        variant="contained"
        color="primary"
      >
        Finish Session
      </Button>
    </Stack>
  );
}

export default UpdateSessionForm;

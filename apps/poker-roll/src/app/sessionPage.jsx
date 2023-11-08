import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Stack } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useCreateSession } from './queries/helpers';

// session page will allow you to start a new session, cash or tournament

// update session form to edit/add additional session iformation not in the begin session form
// outfor, end time, plus minus

function CashGameForm() {
  const [formState, setFormState] = useState({
    buyIn: '',
    game: '',
    casino: '',
    location: '',
  });
  const mutation = useCreateSession();
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
      <h2>Start New Cash Game</h2>
      <TextField
        label="Initial Buy In"
        variant="outlined"
        name="buyIn"
        type="text"
        value={formState.buyIn}
        onChange={handleChange}
        size="small"
        margin="normal"
      />
      <TextField
        name="game"
        type="text"
        value={formState.game}
        label="Game and Stakes"
        onChange={handleChange}
        variant="outlined"
        size="small"
        margin="normal"
      />
      <TextField
        label="Casino"
        variant="outlined"
        name="casino"
        type="text"
        value={formState.casino}
        onChange={handleChange}
        size="small"
        margin="normal"
      />
      <TextField
        label="Location"
        variant="outlined"
        name="location"
        type="text"
        value={formState.location}
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
        Start Cash Game
      </Button>
    </Stack>
  );
}

function TournamentForm() {
  const [formState, setFormState] = useState({
    buyIn: '',
    game: '',
    casino: '',
    location: '',
  });
  const mutation = useCreateSession();
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Stack
      spacing={1}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <h2>Enter New Tournament</h2>
      <TextField
        label="Tournament Buy In"
        variant="outlined"
        name="buyIn"
        type="text"
        value={formState.buyIn}
        onChange={handleChange}
        size="small"
        margin="normal"
      />
      <TextField
        name="game"
        type="text"
        value={formState.game}
        label="Tournament Name"
        onChange={handleChange}
        variant="outlined"
        size="small"
        margin="normal"
      />
      <TextField
        label="Casino"
        variant="outlined"
        name="casino"
        type="text"
        value={formState.casino}
        onChange={handleChange}
        size="small"
        margin="normal"
      />
      <TextField
        label="Location"
        variant="outlined"
        name="location"
        type="text"
        value={formState.location}
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
        Begin Tournament
      </Button>
    </Stack>
  );
}
const NewSession = (props) => {
  const [gameType, setGameType] = React.useState('cashgame');

  const handleToggleChange = (event, newGameType) => {
    setGameType(newGameType);
  };

  // form submit functionality

  return (
    <div>
      <ToggleButtonGroup
        color="primary"
        value={gameType}
        exclusive
        onChange={handleToggleChange}
        aria-label="Platform"
      >
        <ToggleButton value="cashgame">Cash Game</ToggleButton>
        <ToggleButton value="tournament">Tournament</ToggleButton>
      </ToggleButtonGroup>
      {/* change which stack is show depending on cashgame or tournament is selected */}
      {gameType === 'cashgame' ? <CashGameForm /> : <TournamentForm />}
    </div>
  );
};
export default NewSession;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Stack } from "@mui/material";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const SessionForm = (props) => {
    const [formState, setFormState] = useState({
        buyIn: "",
        game: "",
        casino: "",
        location: "",
      });

      const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };
    const [alignment, setAlignment] = React.useState('cashgame');

  const handleToggleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // form submit functionality
};

    return (
        <div>
            <form
        className="bg-white m-4 text-dark newAccountForm"
        onSubmit={handleFormSubmit}
      >
            <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleToggleChange}
      aria-label="Platform"
    >
      <ToggleButton value="cashgame">CashGame</ToggleButton>
      <ToggleButton value="tournament">Tournament</ToggleButton>
      </ToggleButtonGroup>
      {/* change which stack is show depending on cashgame or tournament is selected */}


        <Stack
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <h2>Enter New Tournament</h2>
          <TextField
            label="Tournamnet Buy In"
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
            type="submit"
            size="small"
            variant="contained"
            color="primary"
          >
            Begin Tournament
          </Button>
          {/* only render this form secion if cashgame toggle is active */}
          <h2>New CashGame</h2>
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
            type="submit"
            size="small"
            variant="contained"
            color="primary"
          >
            Start CashGame
          </Button>

        </Stack>
      </form>
        </div>
    )
}
export default SessionForm;
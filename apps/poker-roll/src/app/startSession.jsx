import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Stack } from "@mui/material";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const SessionForm = (props) => {
    const [formState, setFormState] = useState({
        // tournament or cash
            // if tournament 
            // buy in
            // tournament name
            // casino
            // location
                // if cash
                // game type
                // buy in
                // casino
                // location
                // start time
    })
    const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

    return (
        <div>
            <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="cashgame">CashGame</ToggleButton>
      <ToggleButton value="tournament">Tournament</ToggleButton>
      </ToggleButtonGroup>

        </div>
    )
}
export default SessionForm;
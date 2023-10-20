import React, { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";
import { useGetAllSessions } from "./queries/helpers";

function UpdateSessionForm(){
    const [formState, setFormState] = useState({
        buyIn: "",
        game: "",
        casino: "",
        location: "",
        outFor: "",
        notes: "",
    });
    const mutation = useGetAllSessions();
    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    }
    return(
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

        </Stack>
    )
}
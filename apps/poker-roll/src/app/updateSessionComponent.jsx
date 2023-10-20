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
    })
}
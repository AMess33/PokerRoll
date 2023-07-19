// Buy In
// number of buy ins
// game
// casino
// location
// finished place/ and prize
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

function TournamentForm() {
  return (
    <div>
      <div>
        <Box
          className="border border-danger"
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Casino" variant="outlined" />
          <TextField id="outlined-basic" label="Location" variant="outlined" />
          <TextField id="outlined-basic" label="Game" variant="outlined" />
          <TextField id="outlined-basic" label="Buy In" variant="outlined" />
        </Box>
      </div>
    </div>
  );
}

export default TournamentForm;

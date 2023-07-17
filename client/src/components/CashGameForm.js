// In for
// Out for
// start time/end time keep track for +- per hour
// stakes
// game
// casino
// location
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

function CashGameForm() {
  return (
    <div>
      <div>
        <Box
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
          <TextField id="outlined=basic" label="Stakes" variant="outlined" />
          <TextField id="outlined-basic" label="Buy In" variant="outlined" />
        </Box>
      </div>
    </div>
  );
}

export default CashGameForm;

// start cash game button
// start tournament button
// view previous previous sessions/most recent first

import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Link } from "react-router-dom";

function SessionTab() {
  return (
    <div>
      <div>
        <ButtonGroup
          variant="outlined"
          aria-label="outlined primary button group"
        >
          <Button>Start Cash Game</Button>
          <Button>Start Tournament</Button>
        </ButtonGroup>
      </div>
      <div>{/* show previous sessions here/ most recent first */}</div>
    </div>
  );
}

export default SessionTab;

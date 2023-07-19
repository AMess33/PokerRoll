import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PaidIcon from "@mui/icons-material/Paid";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TableBarIcon from "@mui/icons-material/TableBar";

export default function BottomNav() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        className="text-danger"
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Bankroll" icon={<PaidIcon />} />
        <BottomNavigationAction label="Sessions" icon={<TableBarIcon />} />
        <BottomNavigationAction label="Results" icon={<AccessTimeIcon />} />
      </BottomNavigation>
    </Box>
  );
}

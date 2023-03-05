import React from "react";
import { AppBar, Typography } from "@mui/material";

function Navbar() {
  return (
    <>
      <AppBar position="static" style={{ height: 50 }}>
        <Typography variant="h5" style={{ textAlign: "center", margin: 10 }}>
          ImageFinder
        </Typography>
      </AppBar>
    </>
  );
}

export default Navbar;

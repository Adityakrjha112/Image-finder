import React from "react";
import { AppBar, Typography } from "@mui/material";

function Navbar() {
  return (
    <>
      <AppBar
        position="fixed"
        style={{
          height: 50,
          background: "transparent",
          boxShadow: "none",
          backgroundColor: "rgb(90, 19, 156)",
        }}
        // color="transparent"
        // elevation={0}
      >
        <Typography variant="h5" style={{ textAlign: "center", margin: 10 }}>
          ImageFinder
        </Typography>
      </AppBar>
    </>
  );
}

export default Navbar;

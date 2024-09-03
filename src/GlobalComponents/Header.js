import React from "react";
import { Box, Typography } from "@mui/material";

function Header() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "200px",
        color: "white",
        background: "gray",
        alignContent: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h1">The Generics</Typography>
    </Box>
  );
}

export default Header;

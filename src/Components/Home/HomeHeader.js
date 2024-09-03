import React from "react";
import { Box, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function HomeHeader() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        color: "white",
        background: "gray",
      }}
    >
      <Typography variant="h1">The Generics</Typography>
      <Typography
        sx={{
          marginTop: "30px",
          padding: "10px",
          border: "1px solid #26f7fd",
        }}
        variant="h6"
      >
        Get Our Latest Album
      </Typography>
      <Box
        sx={{
          margin: "30px 0",
          padding: "5px",
          border: "1px solid #26f7fd",
          borderRadius: "50%",
        }}
      >
        <PlayArrowIcon sx={{ width: "50px", height: "50px" }} />
      </Box>
    </Box>
  );
}

export default HomeHeader;

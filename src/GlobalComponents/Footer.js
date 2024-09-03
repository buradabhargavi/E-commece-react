import React from "react";
import { Box, Typography, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <Box
      sx={{
        width: "80%",
        background: "#26f7fd",
        height: "100px",
        padding: "0 10%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h3" sx={{ color: "white" }}>
        The Generics
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Link
          href="https://www.youtube.com"
          color="inherit"
          underline="none"
          target="_blank"
        >
          <YouTubeIcon sx={{ width: "30px", height: "30px" }} />
        </Link>
        <Link
          href="https://www.instagram.com"
          color="inherit"
          underline="none"
          target="_blank"
        >
          <InstagramIcon sx={{ width: "30px", height: "30px" }} />
        </Link>
        <Link
          href="https://www.facebook.com"
          color="inherit"
          underline="none"
          target="_blank"
        >
          <FacebookIcon sx={{ width: "30px", height: "30px" }} />
        </Link>
      </Box>
    </Box>
  );
}

export default Footer;

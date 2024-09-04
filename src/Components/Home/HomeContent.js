import React from "react";
import { Box, Typography, Button, Divider } from "@mui/material";

const Movies = [
  {
    date: "2022-05-01",
    director: "Christopher Nolan",
    title: "Inception",
  },
  {
    date: "2019-11-22",
    director: "Martin Scorsese",
    title: "The Irishman",
  },
  {
    date: "2018-07-20",
    director: "James Cameron",
    title: "Avatar",
  },
  {
    date: "2021-06-15",
    director: "Denis Villeneuve",
    title: "Dune",
  },
];

function HomeContent() {
  return (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 4,
      }}
    >
      <Typography variant="h3" gutterBottom>
        Movies
      </Typography>

      <Box
        sx={{
          width: "100%",
          maxWidth: 800,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {Movies.map((movie, index) => (
          <Box
            key={index}
            sx={{
              p: 2,
              borderRadius: 2,
              boxShadow: 2,
              bgcolor: "background.paper",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="h6" noWrap>
                {movie.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Directed by: {movie.director}
              </Typography>
            </Box>
            <Typography variant="body2" color="textSecondary">
              Release Date: {movie.date}
            </Typography>

            <Button variant="contained" color="primary">
              Buy Tickets
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default HomeContent;

import { Box, Button, Typography } from "@mui/material";
import { Grid } from "@mui/material";

function DisplayItem({ product }) {
  return (
    <Box
      borderRadius={2}
      p={2}
      mb={2}
      sx={{
        height: "400px",
        background: "F6F6F6",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <Typography variant="h6" align="center" sx={{ height: "70px" }}>
            {product.title}
          </Typography>
        </Grid>
        <Grid item>
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "100%", maxWidth: 200, height: "200px" }}
          />
        </Grid>
        <Grid item>
          <Typography variant="h6">${product.price}</Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DisplayItem;

import { Box, Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import React from "react";
import DisplayItem from "./DisplayItem";

function StoreContent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetch("https://fakestoreapi.com/products");
        if (!data.ok) {
          throw new Error("Could not fetch data");
        }
        const response = await data.json();
        setProducts(response);
      } catch (error) {
        console.error(error.message);
      }
    }

    loadData();
  }, []);

  return (
    <Box p={2}>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={6} key={product.id}>
            <DisplayItem product={product} />
          </Grid>
        ))}
      </Grid>
      <Box mt={2} textAlign="center">
        <Button variant="contained" color="primary">
          See Cart
        </Button>
      </Box>
    </Box>
  );
}

export default StoreContent;

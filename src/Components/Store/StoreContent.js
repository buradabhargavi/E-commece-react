import { Box, Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import React from "react";
import DisplayItem from "./DisplayItem";
import Loader from "../../GlobalComponents/Loader";

function StoreContent() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Could not fetch data");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      } finally {
        setIsLoading(false); // Ensure this runs after fetch attempt
      }
    }

    loadData();
  }, []);

  return (
    <Box p={2}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Grid container spacing={2}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                {" "}
                <DisplayItem product={product} />
              </Grid>
            ))}
          </Grid>
          <Box mt={2} textAlign="center">
            <Button variant="contained" color="primary">
              See Cart
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}

export default StoreContent;

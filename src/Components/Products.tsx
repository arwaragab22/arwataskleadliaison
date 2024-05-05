import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";

import { Product } from "../Types/app";
import { ProductsProps } from "../Types/app";
import ProductItem from "./Product";
import { Grid } from "@mui/material";
function Products({ Products, selectedCategory }: ProductsProps) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (selectedCategory) {
      const filtered = Products.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(Products);
    }
  }, [Products, selectedCategory]);

  useEffect(() => {}, [filteredProducts]);

  return (
    <Box component="section" sx={{ p: 2, marginTop: "25px" }}>
      <Grid container spacing={2} justifyContent="center">
        {filteredProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductItem product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Products;

import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { ProductItemProps } from "../Types/app";
import React from "react";
function ProductItem({ product }: ProductItemProps) {
  return (
    <Card
      sx={{
        maxWidth: 400,
        display: "flex",
        height: "100%",
        flexDirection: "column",
        minHeight: "70%",
        padding: "20px 5px 10px 5px",
        gap: "20px",
        cursor: "pointer",
        margin: "auto",
      }}
    >
      {product.image && (
        <CardMedia
          component="img"
          style={{ height: 300, objectFit: "contain" }}
          image={product.image}
          alt="Product Image"
        />
      )}
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          style={{ fontSize: 17 }}
        >
          {product.title}
        </Typography>
        <Box>
          <Typography
            component="span"
            style={{ fontSize: 16, fontWeight: "bold" }}
            color="                     #3a5ccb !important
"
          >
            {product.category}
          </Typography>
          <Typography color="text.secondary">{product.price}$</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProductItem;

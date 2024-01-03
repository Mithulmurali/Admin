// src/components/ProductList.js
import React from 'react';
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography, Button } from '@mui/material';

const ProductList = ({ products, onAddToCart }) => {
  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                 width="60"
                image={product.image} // Replace with your product image URL
                alt={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {product.description}
                </Typography>
                <Typography variant="h6" component="p">
                  Price: ${product.price}
                </Typography>
              </CardContent>
            </CardActionArea>
            <Button onClick={() => onAddToCart(product)} variant="contained" color="primary">
              Add to Cart
            </Button>
          </Card>
        </Grid>
        
      ))}
      
    </Grid>
    
  );
};

export default ProductList;

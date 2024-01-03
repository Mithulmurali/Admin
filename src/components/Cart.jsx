// src/components/Cart.js
import React from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';

const Cart = ({ cartItems, onRemoveFromCart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <List>
        {cartItems.map((item) => (
          <ListItem key={item.id}>
            <ListItemText primary={item.name} secondary={`Quantity: ${item.quantity}`} />
            <Button onClick={() => onRemoveFromCart(item)} variant="outlined" color="secondary">
              Remove
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Cart;

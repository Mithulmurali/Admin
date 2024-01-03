// App.js
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Slider from 'react-slick';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  const [products] = useState([
    { id: 1, name: 'Apple per kg',image:'https://www.shutterstock.com/image-photo/red-apple-isolated-on-white-600nw-1727544364.jpg', price: 100 },
    { id: 2, name: 'Banana per kg',image:'https://media.istockphoto.com/id/173242750/photo/banana-bunch.jpg?s=612x612&w=0&k=20&c=MAc8AXVz5KxwWeEmh75WwH6j_HouRczBFAhulLAtRUU=', price: 45 },
    { id: 3, name: 'Orange per kg',image:'https://media.istockphoto.com/id/185284489/photo/orange.jpg?s=612x612&w=0&k=20&c=m4EXknC74i2aYWCbjxbzZ6EtRaJkdSJNtekh4m1PspE=', price: 60 },
    // Add more products as needed
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productToRemove) => {
    const updatedCart = cartItems.filter((item) => item.id !== productToRemove.id);
    setCartItems(updatedCart);
  };
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    
    <div className="app">
       <AppBar position="static" >
        <Toolbar>
          <Typography variant="h6">My Grocery Shop</Typography>
          {/* Add more navbar items as needed */}
        </Toolbar>
      </AppBar>
      <AppBar position="static" sx={{ height:70, backgroundColor:' #89cff0' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Grocery Shop
        </Typography>
        {/* Add your navigation links here */}
       
        <Typography variant="h6" component="div">
          <a href="#products" style={{ textDecoration: 'none', color: 'inherit' }}>
            Products
          </a>
        </Typography>
        {/* Add more links as needed */}
      </Toolbar>
    </AppBar>
      <Container>
        <HomePageSlider settings={sliderSettings} />
        {/* Other content for the homepage */}
      </Container>
      
      <br></br>
      <ProductList products={products} onAddToCart={addToCart} />
      <Cart cartItems={cartItems} onRemoveFromCart={removeFromCart} />
    </div>
  );
};
const HomePageSlider = ({ settings }) => {
  return (
    <Slider {...settings}>
      <div>
        <img
          src="https://www.jiomart.com/images/category/220/fresh-fruits-20220519.jpeg"
          alt="Slide 1"
        />
      </div>
      <div>
        <img
          src="https://www.jiomart.com/images/category/229/fresh-vegetables-20220519.jpeg"
          alt="Slide 2"
        />
      </div>
    </Slider>
  );
};

export default App;

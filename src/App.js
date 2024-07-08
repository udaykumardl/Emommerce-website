import React, { useState } from 'react';
import './App.css';
import { Button, Navbar, Nav } from 'react-bootstrap';
import Cart from './Components/Cart/Cart';
import Products from './Products';


const App = () => {
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);

  return (
    <div className='App'>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link onClick={handleShowCart}>
            <i className="fas fa-shopping-cart"></i> Cart
          </Nav.Link>
        </Nav>
      </Navbar>
      <Cart show={showCart} handleClose={handleCloseCart} />
      <h2>App Component</h2>
      <Products />

    </div>
  );
}

export default App;

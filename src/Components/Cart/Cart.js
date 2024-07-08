// src/Cart.js

import React, { useState } from 'react';
import { Modal, Button, ListGroup, Image, Container, Row, Col } from 'react-bootstrap';

const Cart = ({ show, handleClose }) => {
  const cartElements = [
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      quantity: 2,
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      quantity: 3,
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      quantity: 1,
    },
    {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        quantity:2,
      }
  ];

  const [cartItems, setCartItems] = useState(cartElements);

  const removeItem = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <Modal show={show} onHide={handleClose} className='cart-modal'>
      <Modal.Header closeButton>
        <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ListGroup>
            {cartItems.map((item, index) => (
              <ListGroup.Item key={index}>
                <Container>
                  <Row>
                    <Col xs={4}>
                      <Image src={item.imageUrl} fluid />
                    </Col>
                    <Col xs={6}>
                      <h5>{item.title}</h5>
                      <p>Price: ${item.price}</p>
                      <p>Quantity: {item.quantity}</p>
                    </Col>
                    <Col xs={2}>
                      <Button variant="danger" onClick={() => removeItem(index)}>Remove</Button>
                    </Col>
                  </Row>
                </Container>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;



// import React, { useState } from 'react';
// import { Modal, Button, ListGroup, Image, Container, Row, Col } from 'react-bootstrap';

// const Cart = ({ show, handleClose }) => {
//   const cartElements = [
//     {
//       title: 'Colors',
//       price: 100,
//       imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
//       quantity: 2,
//     },
//     {
//       title: 'Black and white Colors',
//       price: 50,
//       imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
//       quantity: 3,
//     },
//     {
//       title: 'Yellow and Black Colors',
//       price: 70,
//       imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
//       quantity: 1,
//     }
//   ];

//   const [cartItems, setCartItems] = useState(cartElements);

//   const removeItem = (index) => {
//     const newCartItems = [...cartItems];
//     newCartItems.splice(index, 1);
//     setCartItems(newCartItems);
//   };

//   return (
//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Shopping Cart</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         {cartItems.length === 0 ? (
//           <p>Your cart is empty</p>
//         ) : (
//           <>
//             <ListGroup>
//               {cartItems.map((item, index) => (
//                 <ListGroup.Item key={index}>
//                   <Container>
//                     <Row>
//                       <Col xs={4}>
//                         <Image src={item.imageUrl} fluid />
//                       </Col>
//                       <Col xs={6}>
//                         <h5>{item.title}</h5>
//                         <p>Price: ${item.price}</p>
//                         <p>Quantity: {item.quantity}</p>
//                       </Col>
//                       <Col xs={2}>
//                         <Button variant="danger" onClick={() => removeItem(index)}>Remove</Button>
//                       </Col>
//                     </Row>
//                   </Container>
//                 </ListGroup.Item>
//               ))}
//             </ListGroup>
//             <hr />
//             <Container>
//               <Row className="justify-content-end">
//                 <Col xs={8}>
                  
//                 </Col>
//                 <Col xs={4}>
                  
//                 </Col>
//               </Row>
//             </Container>
//           </>
//         )}
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={handleClose}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default Cart;

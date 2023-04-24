import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const pizzaLogo = 'https://cdn-icons-png.flaticon.com/512/3595/3595458.png';

function NavigationComponent() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <img
            alt=""
            src={pizzaLogo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Pizzalo
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavigationComponent;

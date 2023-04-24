import React, { useEffect } from 'react';
import NavigationComponent from '../Components/Navbar';
import Slider from '../Components/Slider';
import ProductCard from '../Components/Cards/ProductCard';
import { data } from '../data';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
    <section>
      {/* Navigation
      Slider
      Listings */}
      <NavigationComponent />
      <Slider />
      <div id="product-listing-container" className="container mt-3">
        <Row>
          {data.length > 0 ? (
            data.map((d, i) => (
              <Col xs={6} sm={6} md={4} lg={3}>
                <ProductCard key={i} data={d} />
              </Col>
            ))
          ) : (
            <p>Pizza is not available today</p>
          )}
        </Row>
      </div>
    </section>
  );
}

export default Home;

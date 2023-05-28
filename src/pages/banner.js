/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import images1 from '../assets/images/slider1.jpg';
import images2 from '../assets/images/slider2.jpg';
import images3 from '../assets/images/slider3.jpg';
import images4 from '../assets/images/slider4.jpg';

const Banner = () => {
  return (
    <div className="container-fluid p-0">
      <Carousel>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src={images1}
            alt="First slide"
            width="auto"
            height="300px"
          />
          <Carousel.Caption>
            <h3>Men's Clothing</h3>
            <p>You can Find here a lot of varieties for Men.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src={images2} alt="Second slide" height="300px" />
          <Carousel.Caption>
            <h3>Women's Clothing</h3>
            <p>You can Find here a lot of varieties for Women.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images3}
            alt="Third slide"
            width="auto"
            height="300px"
          />
          <Carousel.Caption>
            <h3>Electronics</h3>
            <p>You can Find all types of Appliances.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images4}
            alt="Third slide"
            width="auto"
            height="300px"
          />
          <Carousel.Caption>
            <h3>Jewellery</h3>
            <p>You can Find fancy Jewellery here.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;

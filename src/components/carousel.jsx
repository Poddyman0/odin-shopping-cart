import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ItemOnePicture from './immages/picone.webp';
import ItemTwoPicture from './immages/pictwo.webp';
import ItemThreePicture from './immages/picthree.webp';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    
    <Carousel  activeIndex={index} onSelect={handleSelect} data-bs-theme="dark">
      <Carousel.Item data-testid="carousel-card">
        <img data-testid="carousel-card-picture" className="homepage-pic" src={ItemOnePicture} alt={"item picture"} text="First slide" />
        <Carousel.Caption>
          <h3 data-testid="carousel-title" className="carousel-title">Ear Rings</h3>
          <p data-testid="carousel-text" className="carousel-text">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item data-testid="carousel-card">
      <img data-testid="carousel-card-picture" className="homepage-pic" src={ItemTwoPicture} alt={"item picture"} text="First slide" />
        <Carousel.Caption>
        <h3 data-testid="carousel-title" className="carousel-title">Party Clothes</h3>
          <p data-testid="carousel-text" className="carousel-text">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item data-testid="carousel-card">
      <img data-testid="carousel-card-picture" className="homepage-pic" src={ItemThreePicture} alt={"item picture"} text="First slide" />
        <Carousel.Caption>
        <h3 data-testid="carousel-title" className="carousel-title">Denim</h3>
          <p data-testid="carousel-text" className="carousel-text">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
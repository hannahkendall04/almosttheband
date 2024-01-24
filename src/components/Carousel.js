import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ImageCarousel({img1, img2, img3, img4}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousels">
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={img1} alt="Carousel" />
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} alt="Carousel"/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3} alt="Carousel"/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img4} alt="Carousel"/>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ImageCarousel;
'use client'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
/**
 * Component cree pour utiliser la Carousel de bootstrap afin de faire defiler les images
 * @param {*} props 
 * @returns Slider
 */
function Slider(props) {
  return (
    <Carousel>
      <Carousel.Item>
        <Image src={props.img1Url} alt="img1" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={props.img2Url} alt="img2" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={props.img3Url} alt="img3" />
      </Carousel.Item>
    </Carousel>
  );
}
export default Slider;
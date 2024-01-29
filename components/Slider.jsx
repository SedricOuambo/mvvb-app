import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image'

function Slider(props) {
  return (
    <Carousel>
      <Carousel.Item>
        <Image src={props.img1Url} alt="Logo React"/>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={props.img2Url} alt="Logo React"/>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={props.img3Url} alt="Logo React"/>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
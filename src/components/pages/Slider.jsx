import { Carousel, Image } from "react-bootstrap";

function Slider(Props) {
  return (
    <Carousel>
      {Props.carousel.map((item) => (
        <Carousel.Item key={item.id} style={{ height: "60vh" }} >
          <Image src={item.bgImage} style={{ height: "60vh" , width:"100%"}}/>
          <Carousel.Caption  className="">
            <h3> {item.title}</h3>
            <p>{item.desc}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;

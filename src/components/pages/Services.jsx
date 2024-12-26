import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";

function Services(Props) {
  return (
    <div className="container-fluid bgRed py-5">
      <h1 className="m-5 text-center">{Props.info.sevices.title}</h1>
      <div className="d-flex flex-wrap justify-content-around m-3">
        {Props.info.sevices.services.map((item, index) => {
          return (
            <Card style={{ width: "18rem" }} className="p-2 text-center my-3" key={index}>
              <FontAwesomeIcon icon={faCar} style={{fontSize: "100px"}}/>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Services;

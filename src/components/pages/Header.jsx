import { Image, Navbar, Nav, Container, Button } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";

function Header(Props) {
  
  return (
    <Navbar expand="lg" className=" navbar-light bg-light">
      <Container className="d-flex justify-content-around align-items-center w-100">
        <Navbar.Brand href="#home" className="">
          <Image src={Logo} width="100px" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="shadow-none border-0"
        />
        <Navbar.Collapse id="basic-navbar-nav" className="">
          <Nav className="mx-5">
            {Props.menu.map((item) => (
            
              <Nav.Link href={"#" + item.slug} key={item.id} className="fs-5 m-2">
                {item.title}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
        <Button variant="primary" className="fs-5 pl-5 br-5 d-none d-sm-block">
          Call us
        </Button>
      </Container>
    </Navbar>
  );
}

export default Header;

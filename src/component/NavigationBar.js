import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand>ANIMEKU</Navbar.Brand>
          <Nav>
            <Nav.Link>FAVORITE</Nav.Link>
            <Nav.Link>LAST WATCH</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;

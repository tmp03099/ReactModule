import { Navbar, Container } from 'react-bootstrap';
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import Nav from 'react-bootstrap/Nav';
import { NavDropdown } from "react-bootstrap";

function NavBar(){
    return(
        <Navbar bg="light" expand="md">
        <Container>
          <NavbarBrand>Movies App</NavbarBrand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        
        </Container>
      </Navbar>
    )

}
export default NavBar
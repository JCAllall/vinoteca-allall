import { useContext } from "react";
import { Container, Nav, Navbar, Badge, NavDropdown } from "react-bootstrap";
import { HiShoppingCart } from "react-icons/hi";
import AppContext from "../../hooks/appContext";

const HeaderApp = () => {
  const { itemsInCart } = useContext(AppContext);
  return (
    <Navbar bg="danger" fixed="top">
      <Container>
        <Navbar.Brand href="/" color="white">
          Vinoteca Allal
        </Navbar.Brand>
        <Nav activeKey="/home" className="me-auto">
          <Nav.Item className="m-1">
            <NavDropdown title="Productos" id="nav-dropdown">
              <NavDropdown.Item href="products?category=vinos">
                Vinos
              </NavDropdown.Item>
              <NavDropdown.Item href="products?category=espumantes">
                Espumantes
              </NavDropdown.Item>
              <NavDropdown.Item href="products?category=whiskies">
                Whiskies
              </NavDropdown.Item>
              <NavDropdown.Item href="products?category=gin">
                Gin
              </NavDropdown.Item>
            </NavDropdown>
          </Nav.Item>
          <Nav.Item className="m-1">
            <Nav.Link href="/nosotros">Nosotros</Nav.Link>
          </Nav.Item>
          <Nav.Item className="m-1">
            <Nav.Link href="/contacto">Contacto</Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav.Link href="shopping-cart">
          <HiShoppingCart color="white" fontSize="1.5em" />
          <Badge bg="success">{itemsInCart.length}</Badge>
        </Nav.Link>
      </Container>
    </Navbar>
  );
};

export default HeaderApp;

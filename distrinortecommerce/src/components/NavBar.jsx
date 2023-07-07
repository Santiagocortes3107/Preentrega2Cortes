import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import data from "../data/products.json"

const categories = data.map(product => product.category)
const unique = new Set(categories)

import { CartWidget } from "./CartWidget"

export const NavBar = () => (
    <Navbar bg="dark" variant="dark">
   <Container>
      <Navbar.Brand>DistriNorte</Navbar.Brand>
      <Nav className="me-auto">
        {[ ... unique].map(item => (
          <NavLink
          key={item}
          className="nav-link"
          to= {`/category/${item}`}>
            {item}
          </NavLink>

        ))}
     </Nav>
     <CartWidget/>
    </Container>
  </Navbar>
)
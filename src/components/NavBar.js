import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const navBar = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Shop</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/event'>Event</Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default navBar;
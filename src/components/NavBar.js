import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'
const navBar = ({ username }) => {
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Shop</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to='/'>Home</Link>
                    <Link to='/cart'>Cart</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/event'>Event</Link>
                </Nav>
                <Nav className='ms auto' style={{'color' : '#fff'}}>
                    {username.isLoading ? '로딩중입니다' : `반가워요 ${username.data.name}`}
                </Nav>
            </Container>
        </Navbar>
    );
};

export default navBar;
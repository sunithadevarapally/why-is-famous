import React from 'react';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';


class Navigation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activeKey: "/Home"
        }
    }
    render() {
        return (
        <Navbar collapseOnSelect fixed = 'top' bg="dark" expand="sm" variant="dark">
            <Container>
                <Navbar.Brand href="/Home">WhyIs___Famous</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav activeKey= "/Home" >
                        <Nav.Link href="/Blogs">Blogs</Nav.Link>
                        <Nav.Link href="/AboutUs">About Us</Nav.Link>
                        <NavDropdown title="Search" id="responsive-nav-dropdown">
                            <NavDropdown.Item href="/RecentlyAsked">Recently Asked</NavDropdown.Item>
                            <NavDropdown.Item href="/TopUpvoted">Top Upvoted</NavDropdown.Item>
                            <NavDropdown.Item href="/RecentlyAnswered">Recently Answered</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="/CustomSearch">Custom Search</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        );
    }

}
export default Navigation;

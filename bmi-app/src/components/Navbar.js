import React, { Component } from 'react';
import '../App.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class NavbarComponent extends Component {
    constructor(props) {
        super(props);
        this.logOutUser = this.logOutUser.bind(this);
        this.state = { username: '' };
    }

    componentDidMount() {
        let user_name = localStorage.getItem("username");
        this.setState({ username: user_name });
    };

    logOutUser() {
        localStorage.clear();
        this.props.history.push('/');
    }

    render() {
        return (
            <Navbar fixed="top" bg="light" expand="xl">
                <Navbar.Brand href="/Home">My BMI</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className="nav-link" href="/Compute">Calculate</Nav.Link>
                        <Nav.Link href="/Reservations">Bmi graph</Nav.Link>
                        <NavDropdown title="Account" id="basic-nav-dropdown">
                            <NavDropdown.Item>{this.state.username}</NavDropdown.Item>
                            <NavDropdown.Item href="/DeleteAccount">Delete account</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={this.logOutUser}>Log out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav.Link href="/AboutUs">About</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavbarComponent;
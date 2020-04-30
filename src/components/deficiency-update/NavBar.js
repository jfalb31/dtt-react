import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class NavBar extends React.Component {

  goToView = () => {
    this.props.history.push(`/dut/view`);
  }

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href={`${process.env.PUBLIC_URL}/`}>D.U.T.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href={`${process.env.PUBLIC_URL}/`}>Home</Nav.Link>
            <Nav.Link href={`${process.env.PUBLIC_URL}/dut/view`}>View</Nav.Link>
            <Nav.Link href={`${process.env.PUBLIC_URL}/dut/update`}>Update</Nav.Link>
            <NavDropdown title="falboj" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Change Password</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;

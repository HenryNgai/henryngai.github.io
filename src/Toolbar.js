import React from 'react';
import './Toolbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function Toolbar(){
	return (
		<Nav className="justify-content-end" variant="tabs" defaultActiveKey="/home" id="toolbar">
		  <Nav.Link href="#About Me" className= "customToolbarTab">0.1 About</Nav.Link>
		  <Nav.Link href="#Experience" className= "customToolbarTab">0.2 Experience</Nav.Link>
		  <Nav.Link href="#projects" className= "customToolbarTab">0.3 Projects</Nav.Link>
		  <Nav.Link href="#contact" className= "customToolbarTab">0.4 Contact</Nav.Link>
		</Nav>
	);
}

export default Toolbar;
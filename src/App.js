 /* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { Navbar, Container, Nav, NavDropdown, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Data from './data';
import { Link, Route, Switch } from 'react-router-dom'
import Detail from './Detail';




function App() {

  let [shoes, shoes변경] = useState(Data);


  
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/detail">Detail</Link></Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      <Card className='background'>
        <Card.Img variant="top" src="background.jpg" />
        <Card.Body>
          <Card.Text>
            맛좋은 쇼핑몰 사이트
          </Card.Text>
        </Card.Body>
      </Card>

      <Route exact path="/">
          
      </Route>

      <Route exact path="/detail">
        <Detail />
      </Route>  


      <div className='container'>
        <div className='row'>
          {
            shoes.map((a,i)=>{
              return <Card2 shoes={shoes[i]} i={i} key={i} />
            })
          }
          
                   
        </div>
      </div>

    </div>
  );
}





function Card2(props){
  return (
    <>
      <div className='col-md-4'>
        <img src={'https://codingapple1.github.io/shop/shoes'+(props.i + 1)+'.jpg'} width="100%" />
        <h4>{ props.shoes.title }</h4>
        <p>{ props.shoes.content } & { props.shoes.price }</p>
      </div>
    </>
  )
}

export default App;

import React, { Component } from 'react';
import { Row, Col, Button, Icon } from 'antd';
import './headerComponent.css';
import {Link} from 'react-scroll';
class Header extends Component {
  state = {
    show: false
  };

  componentDidMount(){
    if (window.location.pathname === '/') {
      this.setState({show: true});
    }
   }


  render() {
    return (
      <div style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Row className="header">
          <Col md={2} offset={2}>
            <div className="trade_name">
              <img style={{width:"150px"}} 
              alt="logo"
              src="images/Farmington.png"></img></div>
          </Col>
        </Row>
        <Row className="sub_header">
          <Col md={2} offset={2}>
            <a href="/">Home</a>
          </Col>
          {this.state.show ?
          <div>
          <Col md={2}>
            <Link to="services" smooth={true} duration={1000} >Services</Link>
          </Col>
          <Col md={2}>
            <Link to="about" smooth={true} duration={1000}>About</Link>
          </Col>
          <Col md={2}>
            <Link to="testimonials" smooth={true} duration={1000}>Testimonials</Link>
          </Col>
          <Col md={2} >
            <Link to="contact" smooth={true} duration={1000}>Contact</Link>
          </Col>
          <Col md={2}>
            <Link to="gallery" smooth={true} duration={1000}>Gallery</Link>
          </Col>
          </div>
          : null}
          <Col md={2} style={{position:"absolute", right:"11vh"}}>
            <a href="#">SignUp/SignIn</a>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;

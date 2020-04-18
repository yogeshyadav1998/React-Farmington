import React, { Component } from 'react';
import {connect} from 'react-redux';

import { Row, Col, Button, Icon } from 'antd';
import './headerComponent.css';
import {Link} from 'react-scroll';
import * as action from './../../../store/actions/index';

class Header extends Component {
  state = {
    show: false
  };

  componentDidMount(){
    if (window.location.pathname === '/') {
      this.setState({show: true});
    }
   }

  opensignpage = () =>{
    console.log('hii')
    this.props.onopensignpage();
  }

  logout = () =>{
    this.props.onlogout();
  }

  render() {
    return (
      <div className="main" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
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
          {!this.props.tokenid?
          <Col md={2} style={{position:"absolute", right:"11vh"}}>
            <a onClick={this.opensignpage}>SignUp/SignIn</a>
          </Col>
          : <Col md={2} style={{position:"absolute", right:"11vh"}}>
              <a onClick={this.logout}>{this.props.name +' '+'Logout'}</a>
            </Col>}
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return{
      name: state.auth.name,
      tokenid: state.auth.tokenid
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    onlogout: () => dispatch(action.authlogout()),
    onopensignpage: () => dispatch(action.opensignpage())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);

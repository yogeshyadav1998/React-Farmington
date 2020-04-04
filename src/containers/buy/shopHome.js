import React, { Component } from 'react';

import { Row, Col, Carousel} from 'antd';
import './shopHome.css';
class ShopHome extends Component {
  state = {};
  render() {
    return (
      <div>
        <Row className="homeImage">
          <Col md={15} offset={5} className="heading">
            <div>WE SERVE FRESH VEGETABLE FRUITS & GRAINS</div>
          </Col>
          <Col offset={11} md={2}>
            <button className="button">View </button>
          </Col>
        </Row>
        <Row className="thumbs">
          <Col offset={3} md={3}>
            <div className="one"><img style={{height:"20vh", width:"20vh"}} src="/images/one.jpg"/></div>
            <div style={{margin:"8px"}}>
              <b>FREE SHIPPING</b>
            </div>
            <div>ON ORDER OVER 5K</div>
          </Col>
          <Col md={3} offset={2}>
            <div className="two"><img style={{height:"20vh", width:"20vh"}} src="/images/two.jpg"/></div>
            <div style={{margin:"8px"}}>
              <b>ALWAYS FRESH</b>
            </div>
            <div>PRODUCT WELL PACKAGE</div>
          </Col>
          <Col md={3} offset={2}>
            <div className="three"><img style={{height:"20vh", width:"20vh"}} src="/images/three.jpg"/></div>
            <div style={{margin:"8px"}}>
              <b>SUPERIOR QUALITY</b>
            </div>
            <div>QUALITY PRODUCTS</div>
          </Col>
          <Col offset={2} md={3}>
            <div className="four"><img style={{height:"20vh", width:"20vh"}} src="/images/four.jpg"/></div>
            <div style={{margin:"8px"}}>
              <b>SUPPORT</b>
            </div>
            <div>24/7 SUPPORT</div>
          </Col>
        </Row>
        <Row style={{paddingBottom:"5vh"}}>
        <Col offset={1} md={5} className="product">
          <div className="title">
            <h1>FRUITS</h1>
          </div>
          <div className="image">
            <img className="productimg" src="/images/fruit1.jpg"/>
          </div>
        </Col>
        <Col offset={1} md={4} className="product">
        <div className="image">
           <img className="productimg" src="/images/pulses1.jpg"/>
        </div>
        <div className="title">
            <h1>PULSES</h1>
          </div>
        </Col>
        <Col offset={2} md={4} className="product">
          <div className="title">
            <h1>GRAINS</h1>
          </div>
          <div className="image">
          <img className="productimg" src="/images/grain1.jpg"/>
        </div>
        </Col>
        <Col offset={1} md={5} className="product">
          <div className="image">
          <img className="productimg" src="/images/veg1.jpg"/>
          </div>
          <div className="title">
            <h1>VEGETABLES</h1>
          </div>
        </Col>
        </Row>
        <br/>
      </div>
    );
  }
}

export default ShopHome;

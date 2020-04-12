import React, { Component } from 'react';

import { Row, Col, Carousel} from 'antd';
import './shop.css';
import Productads from './productads/productads';

class Shop extends Component {
  state = {
    step: 0
  }

  fruitsads = () => {
    const {step} = this.state;
    this.setState({step: step + 1});
  }
  pulsesads = () => {
    const {step} = this.state;
    this.setState({step: step + 2})
  }
  grainsads = () => {
    const {step} = this.state;
    this.setState({step: step + 3})
  }
  vegetableads = () =>{
    const {step} = this.state;
    this.setState({step: step + 4})
  }
  allads = () => {
    const {step} = this.state;
    this.setState({step: step + 5})
  }
  shop=()=>{
    this.props.history.push({
        pathname: '/shop'
    });
}

  render() {
    const {step} = this.state;
    switch(step){
      case 0:
        return(
          <div>
        <Row className="homeImage">
          <Col md={15} offset={5} className="heading">
            <div>WE SERVE FRESH VEGETABLE FRUITS & GRAINS</div>
          </Col>
          <Col offset={11} md={2}>
            <button onClick={this.allads} className="button" className="button">Explore</button>
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
          <a onClick={this.fruitsads}>
          <div className="title">
            <h1>FRUITS</h1>
          </div>
          <div className="image">
            <img className="productimg" src="/images/fruit1.jpg"/>
          </div>
          </a>
        </Col>
        <Col offset={1} md={4} className="product">
        <a onClick={this.pulsesads}>
        <div className="image">
           <img className="productimg" src="/images/pulses1.jpg"/>
        </div>
        <div className="title">
            <h1>PULSES</h1>
          </div>
          </a>
        </Col>
        <Col offset={2} md={4} className="product">
        <a onClick={this.grainsads}>
          <div className="title">
            <h1>GRAINS</h1>
          </div>
          <div className="image">
          <img className="productimg" src="/images/grain1.jpg"/>
        </div>
        </a>
        </Col>
        <Col offset={1} md={5} className="product">
        <a onClick={this.vegetableads}>
          <div className="image">
          <img className="productimg" src="/images/veg1.jpg"/>
          </div>
          <div className="title">
            <h1>VEGETABLES</h1>
          </div>
          </a>
        </Col>
        </Row>
        <br/>
      </div>
    )
    case 1:
      return(
        <Productads
          shop={this.shop}
          producttype="fruit"
        />
      )
    case 2:
      return(
        <Productads
          producttype="pulses"
        />
      )
    case 3: 
      return(
        <Productads
          producttype="grain"
        />
      )
    case 4:
      return(
        <Productads
          producttype="vegetable"
        />
      )
    case 5:
      return(
        <Productads
          producttype="all"
        />
      )
    default:
      return (
        <div >hii</div>
      )
  }
}
}

export default Shop;

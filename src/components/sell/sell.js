import React, { Component } from 'react';
import axios from './../../axios';
import {connect} from 'react-redux';

import {Row, Col, Button, Icon} from 'antd';
import Productad from './productadComponent/productad';
import './sell.css';
import Spinner from './../UI/SpinnerComponent/spinner';
import * as actions from './../../store/actions/index';
import productad from './productadComponent/productad';

class Sell extends Component {

  componentDidMount(){
    this.props.onfetchads()
  }
  adposthandler = () =>{
    this.props.history.push({
        pathname: '/adpostform'
    });
  }


  render() {
    let productads = <Spinner/>
    if(!this.props.loading){
      productads = (
        <div className="ads">
        {this.props.productads.map(ad =>(
          <Productad  producttype={ad.producttype} 
          productname={ad.productname}
          price={ad.price}/>  
          ))}
        </div>
      )
    }
    return (
        <div>
          <Row className="sellImage">
          <Col md={17} offset={4} className="sellheading">
            <div>We Gives Best Price For Your Products</div>
          </Col>
          <Col offset={11} md={2}>
          <Button className="button" onClick={this.adposthandler}>
                Post New Ads 
                <Icon type="right"/>
          </Button>
          </Col>
        </Row>
        <Row className="Heading1">
          <Col offset={4}>
          <h1>
            Previous Ads -
          </h1>
          </Col>
        </Row>
        {productads}
        </div>
    );
  }
}

const mapStateToProps = state =>{
  return{
    productads: state.ads.productads,
    loading: state.ads.loading
  }
}

const mapDispatchTOProps = dispatch => {
  return{
    onfetchads: () => dispatch(actions.fetchads())
  }
}

export default connect(mapStateToProps,mapDispatchTOProps)(Sell);

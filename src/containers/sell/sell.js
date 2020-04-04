import React, { Component } from 'react';
import axios from './../../axios';

import {Row, Col, Button, Icon} from 'antd';
import Productad from './../../components/productadComponent/productad';
import './sell.css';

class Sell extends Component {
  state = {
    ads:[]
  };

  componentDidMount(){
    axios.get('/productads.json')
    .then(res=>{
        const fetchedads = [];
        for(let key in res.data){
            fetchedads.push(
                {...res.data[key],
                id: key}
            )}
        this.setState({ ads: fetchedads});
    })
    .catch(err=>{
        console.log(err);
    });
}
  adposthandler = () =>{
    this.props.history.push({
        pathname: '/adpostform'
    });
}

  render() {
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
        <div className="ads">
        {this.state.ads.map(ad =>(
                        <Productad  producttypetype={ad.producttype} 
                                    productname={ad.productname}
                                    price={ad.price}/>
                    ))}
        </div>
        </div>
    );
  }
}

export default Sell;

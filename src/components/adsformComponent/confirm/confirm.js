import React, {Component } from 'react';
import axios from '../../../axios';

import { Row, Col, Icon, Button, Select, Progress} from 'antd';
import './confirm.css'

const {Option}= Select;
 
export class confirm extends Component{
    continue = e =>{
        e.preventDefault();
        const formdata = this.props.values;
        axios.post('/productads.json', formdata)
                    .then(response =>{
                        console.log(response);
                    })
                    .catch(error =>{
                        console.log(error);
                    }
        );
        this.props.nextstep();
    }
    back = e =>{
        e.preventDefault();
        this.props.prevstep();
    }
 
    render(){
        const {values, handlechange}= this.props;   
        const {values:{producttype, productname, availablequantity, image, additionaldetails,
            qualtiycertificate, price, address, deliverycharges}} = this.props;
        return(
            <div className="form container">
                <h2>Confirm Personal detail-</h2>
                <br/>
                <Row className="inline">
                        <Col md={5} offset={0}>
                        <label>Product Type</label>
                        <h4>{ producttype }</h4>
                        </Col>
                        <Col md={5}>
                        <label>Product Name</label>
                        <h4>{ productname }</h4>
                        </Col>
                        <Col md={5}>
                        <label>Available Quantity</label>
                        <h4>{ availablequantity }</h4>
                        </Col>
                        <Col md={5}> 
                        <label>Price per Kg</label>
                        <h4>{ price }</h4>
                        </Col>
                </Row>
                <br/>
                <h2>For Grains-</h2>
                <Row className="inline">
                        <Col md={7} offset={0}>
                        <label>Address</label>
                        <h4>{ address }</h4>
                        </Col>
                        <Col md={7}>
                        <label>Delivery charges</label>
                        <h4>{ deliverycharges }</h4>
                        </Col>
                        <Col md={6}> 
                        <label>Additional Details</label>
                        <h4>{ additionaldetails }</h4>
                        </Col>
                </Row>
                <br/>
                <br/>
                    <Row className="inline">
                    <Button className="back"
                            onClick={this.back}>       
                        <Icon type="left" />
                        Back
                    </Button>
                    <Button className="continue"
                            onClick={this.continue}>
                        Submit
                        <Icon type="right" />
                    </Button>
                    </Row>
                    <br/>
            </div>
        )
    }
}

export default confirm;
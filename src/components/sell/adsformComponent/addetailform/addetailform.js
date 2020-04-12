import React, { Component } from 'react';

import {Row,Col,Form,Input,Select, Button, Icon } from 'antd';

const {Option} = Select;

export class addetailform extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextstep();
    }
    render(){
        const {values, handlechange}= this.props;
        return(
            <div className="form container">
                <h2>Advertisement Details-</h2>
                <br/>
                <Row className="inline">
                        <Col md={7} offset={0}>
                        <label>Product Type</label>
                        <Form.Item>
                        <Input
                            placeholder="enter product type -"
                            onChange={handlechange('producttype')}
                            defaultValue={values.producttype}
                        />
                        </Form.Item>
                        </Col>
                        <Col md={7}>
                        <label>Product Name</label>
                        <Form.Item>
                        <Input
                            placeholder="enter name of product"
                            onChange={handlechange('productname')}
                            defaultValue={values.productname}
                        />
                        </Form.Item>
                        </Col>
                        <Col md={6}>
                        <label>Price</label>
                        <Form.Item>
                        <Input
                            placeholder="enter price per kg"
                            onChange={handlechange('price')}
                            defaultValue={values.price}
                        />
                        </Form.Item>  
                        </Col>
                    </Row>
                    <Row className="inline">
                        <Col md={7}>
                        <label>Available Quantity</label>
                        <Form.Item>
                        <Input
                            placeholder="enter quantity in kg"
                            onChange={handlechange('availablequantity')}
                            defaultValue={values.availablequantity}
                        />
                        </Form.Item>
                        </Col>
                        <Col  md={7}>
                            <label>Cover Photo</label>
                            <input type="file" />
                        </Col>
                        <Col  md={6}>
                            <label>Quality Image -</label>
                            <input type="file" />
                        </Col>
                    </Row>
                    <br/>
                    <h2>For Grains- </h2>
                    <br/>
                    <Row className="inline">
                        <Col md={22}>
                        <label>Address of Stock</label>
                        <Form.Item>
                        <Input
                            placeholder="enter address of your stock"
                            onChange={handlechange('address')}
                            defaultValue={values.address}
                        />
                        </Form.Item>
                        </Col>
                    </Row>
                    <Row className= "inline">
                        <Col md={7}>
                        <label>Delicery Charges</label>
                        <Form.Item>
                        <Input
                            placeholder="enter delivery charges per 100 kg"
                            onChange={handlechange('deliverycharges')}
                            defaultValue={values.deliverycharges}
                        />
                        </Form.Item>  
                        </Col>
                        <Col md={6}>
                        </Col>
                        <Col md={7}>
                        <label>Additional Details</label>
                        <Form.Item>
                        <Input
                            placeholder="enter details if any"
                            onChange={handlechange('additionaldetails')}
                            defaultValue={values.additionaldetails}
                        />
                        </Form.Item>  
                        </Col>
                    </Row>
                    <br/>
                    <Row className="inline">
                    <Button className="continue"
                            onClick={this.continue}>
                        Continue
                        <Icon type="right" />
                    </Button>
                    </Row>
            </div>
        )
    }
}

export default addetailform;
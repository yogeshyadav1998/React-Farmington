import React, {Component } from 'react';

import { Row, Col, Select, Alert, Button, Icon} from 'antd';
import './success.css'

const {Option}= Select;
 
export class success extends Component{
    continue = e =>{
        e.preventDefault();
        this.props.nextstep();
    }
    back = e =>{
        e.preventDefault();
        this.props.prevstep();
    }

    myrequests = e =>{
        e.preventDefault();
        this.props.myrequests();
    }
    
    render(){
        return(
            <div className="form container">
                <Row>
                    <Alert
                        message="Thank You"
                        description="Your application is submitted. Our Team will send you mail with further instructions."
                        type="success"
                        showIcon
                    />
                </Row>
                <Row>
                    <Col offset={6} md={3}>
                    <Button className="button" onClick={this.myrequests}>
                        My Requests
                        <Icon type="rollback" /></Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default success;
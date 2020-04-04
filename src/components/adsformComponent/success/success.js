import React, {Component } from 'react';

import { Row, Col, Select, Alert, Button, Icon} from 'antd';
import './success.css'

const {Option}= Select;
 
export class success extends Component{

    myads = e =>{
        e.preventDefault();
        this.props.myads();
    }
    
    render(){
        return(
            <div className="form container">
                <Row>
                    <Alert
                        message="Thank You"
                        description="Your Ad is Live Now. Our Team will send you mail with further instructions."
                        type="success"
                        showIcon
                    />
                </Row>
                <Row>
                    <Col offset={6} md={3}>
                    <Button className="button" onClick={this.myads}>
                        My Requests
                        <Icon type="rollback" /></Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default success;
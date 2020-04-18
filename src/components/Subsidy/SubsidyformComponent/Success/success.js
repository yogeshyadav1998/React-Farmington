import React, {Component } from 'react';
import {connect} from 'react-redux';

import { Row, Col, Select, Alert, Button, Icon} from 'antd';
import './success.css'
import Spinner from '../../../UI/SpinnerComponent/spinner';
 
export class success extends Component{

    myrequests = e =>{
        e.preventDefault();
        this.props.myrequests();
    }

    
    render(){

        let success = <Spinner/>
        if(!this.props.loading){
            success = (
                <div >
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

        return(
            <div className="container">
                {success}
            </div>
        )
    }
}

const mapStateToProps= state =>{
    return{
        loading: state.subsidyrequest.loading
    }
}

export default connect(mapStateToProps)(success);
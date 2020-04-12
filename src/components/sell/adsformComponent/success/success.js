import React, {Component } from 'react';
import {connect} from 'react-redux';

import { Row, Col, Select, Alert, Button, Icon} from 'antd';
import './success.css'
import Spinner from './../../../UI/SpinnerComponent/spinner';
 
export class success extends Component{

    myads = e =>{
        e.preventDefault();
        this.props.myads();
    }
    
    render(){
        let success = <Spinner/>
        if(!this.props.loading){
            success = (
                <div >
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
                        My Ads
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

const mapStateToProps = state =>{
    return{
        loading: state.postad.loading
    }
}

export default connect(mapStateToProps)(success);
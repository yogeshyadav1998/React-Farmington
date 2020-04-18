import React, { Component } from 'react';
import axios from '../../axios';
import {connect} from 'react-redux';

import {Row, Col, Button, Icon} from 'antd';
import Subsidyrequest from './subsidyrequestComponent/subsidyrequest';
import './Subsidy.css';
import Spinner from '../UI/SpinnerComponent/spinner';
import * as actions from '../../store/actions/index';

class subsidy extends Component {

    componentDidMount (){
        this.props.onfetchrequests();
    }

    newformhandler = () =>{
        this.props.history.push({
            pathname: '/subsidyform'
        });
    }

    render(){  

        let requests = <Spinner/>
        if(!this.props.loading){
           requests= ( 
               <div className="request">
                    {this.props.requests.map(request =>(
                        <Subsidyrequest subsidytype={request.Subsidytype} 
                                        applier={request.FirstName + " "+ request.LastName}/>
                    ))}
                </div>
           )
        }
        return(
            <div className="Home ">
                <Row className="Homeimage">
                <Col md={15} offset={5} className="Heading">
                    <div>WE SUPPORTS YOUR GROWTH</div>
                </Col>
                <Col offset={11} md={2}>
                    <Button className="button" onClick={this.newformhandler}>
                        Apply New Request
                        <Icon type="right"/></Button>
                </Col>
                </Row>
                <Row>
                    <Col offset={4} className="Headisng1">
                    <h1>Previous Requests-</h1>
                    </Col>
                </Row>
                {requests}
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        requests: state.subsidyrequest.requests,
        loading: state.subsidyrequest.loading
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onfetchrequests: () => dispatch(actions.fetchsubsidyrequests())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(subsidy);
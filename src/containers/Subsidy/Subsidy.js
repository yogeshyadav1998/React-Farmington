import React, { Component } from 'react';
import axios from '../../axios'

import {Row, Col, Button, Icon} from 'antd';
import Subsidyrequest from './../../components/subsidyrequestComponent/subsidyrequest';
import './Subsidy.css';

class subsidy extends Component {
    state={
        requests:[]
    }

    componentDidMount(){
        axios.get('/subsidyrequest.json')
        .then(res=>{
            const fetchedrequests = [];
            for(let key in res.data){
                fetchedrequests.push(
                    {...res.data[key],
                    id: key}
                )}
            this.setState({ requests: fetchedrequests});
        })
        .catch(err=>{
            console.log(err);
        });
    }

    newformhandler = () =>{

        this.props.history.push({
            pathname: '/subsidyform'
        });
    }

    render(){
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
                    <Col offset={4} className="Heading1">
                    <h1>Previous Requests-</h1>
                    </Col>
                </Row>
                <div className="request">
                    {this.state.requests.map(request =>(
                        <Subsidyrequest subsidytype={request.Subsidytype} 
                                        applier={request.FirstName + " "+ request.LastName}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default subsidy;
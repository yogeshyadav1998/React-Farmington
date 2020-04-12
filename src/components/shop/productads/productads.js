import React, { Component } from 'react';
import {connect} from 'react-redux';

import {Row,Col,Button, Icon} from 'antd';
import * as action from './../../../store/actions/index';
import Spinner from './../../UI/SpinnerComponent/spinner';
import Productad from './../productad/productad';

import './productads.css'; 

class productads extends Component{
    componentDidMount () {
        switch(this.props.producttype){
            case 'all':
                return(
                    this.props.onfetchallads()
                )
            case 'fruit':
                return(
                    this.props.onfetchfruitads()
                )
            case 'pulses':
                return(
                    this.props.onfetchpulsesads()
                )
            case 'grain':
                return(
                    this.props.onfetchgrainads()
                )
            case 'vegetable':
                return(
                    this.props.onfetchvegetableads()
                )

        }
    }

    render(){
        let productads = <Spinner/>
        if(!this.props.loading){
            productads=(
                <ul className="ads">
                    {this.props.productads.map(ad =>(
                    <Productad  
                    productname={ad.productname}
                    price={ad.price}/>  
                    ))}
                </ul>
            )
        }
        return(
            <div className="productads">
                <Row>
                    <Col offset={11}>
                        <Button className="button"><Icon type="backward" />Go Back</Button>
                    </Col>
                </Row>
                {productads}
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        productads: state.fetchads.productads,
        loading: state.fetchads.loading
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onfetchallads: () => dispatch(action.fetchallads()),
        onfetchfruitads: () => dispatch(action.fetchfruitads()),
        onfetchpulsesads: () => dispatch(action.fetchpulsesads()),
        onfetchgrainads: () => dispatch(action.fetchgrainads()),
        onfetchvegetableads: () => dispatch(action.fetchvegetableads())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(productads);
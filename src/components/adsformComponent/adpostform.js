import React, { Component } from 'react';

import Addetailform from './addetailform/addetailform';
import Confirm from './confirm/confirm';
import Success from './success/success';

class adpostform extends Component {
    state={
        step:1,
        producttype:'',
        productname:'',
        availablequantity:'',
        image:'',
        qualtiycertificate:'',
        price:'',
        address:'',
        deliverycharges:'',
        additionaldetails:''
    }

    nextstep = () => {
        const {step} =this.state;
        this.setState({
            step: step + 1
        });
    }

    prevstep = () => {
        const {step} =this.state;
        this.setState({
            step: step - 1
        });
    }

    handlechange = input => e => {
        this.setState({[input]: e.target.value});
    }

    myads=()=>{
        this.props.history.push({
            pathname: '/sell'
        });
    }
    render(){
        const {step} = this.state;
        const { producttype,productname, availablequantity, image, additionaldetails,
                qualtiycertificate, price, address, deliverycharges} = this.state;
        const values={producttype, productname, availablequantity, image, additionaldetails,
            qualtiycertificate, price, address, deliverycharges};
        switch(step){
            case 1:
                return(
                    <Addetailform
                    nextstep={this.nextstep}
                    handlechange={this.handlechange}
                    values={values}/>
                );
            case 2:
                return(
                    <Confirm
                    nextstep={this.nextstep}
                    prevstep={this.prevstep}
                    handlechange={this.handlechange}
                    values={values}/>
                    )
            case 3:
                return(
                    <Success
                    myads={this.myads}/>
                )
        }
        return(
            <div className="form">
                <h1>Form</h1>
            </div>
        )
    }
}

export default adpostform;
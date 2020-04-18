import React,{ Component} from 'react';

import Userdetailform from './userdetailform/userdetailform';
import Subsidydetailform from './subsidydetailform/subsidydetailform';
import Documentuploadform from './Documentuploadform/documentuploadform';
import Confirm from './Confirm/confirm';
import Success from './Success/success';


class Subsidyform extends Component{
    state = {
        step: 1,
        FirstName:'',
        LastName:'',
        FatherName:'',
        Age:'',
        Sex:'',
        Occupation:'',
        Address:'',
        Aadhar :'',
        phone:'',
        Maritalstatus:'',
        Annualincome:'',
        Priority:'',
        Subsidytype:'',
        Investedamount:'',
        Loanamount:'',
        Landarea:'',
        Additionaldetail:'',
        Loanaccountnumber:'',
        Accountholdername:'',
        Bankname:'',
        Branchname:'',
        IFSCcode:'',
        PAN:'',
        Aadharcard:'',
        PANcard:'',
        Bankpassbook:'',
        Incomecerti:'',
        Cropregistercerti:'',
        Landcerti:'',
        Photo:'',
        Signature:'',
        userid:''
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

    myrequests=()=>{
        this.props.history.push({
            pathname: '/subsidy'
        });
    }

    render(){
        const {step} = this.state;
        const { FirstName, LastName, FatherName, Age, Sex, Occupation, Address, Aadhar, Phone,
                Maritalstatus, Annualincome, Priority, Subsidytype, Investedamount, Loanaccountnumber,
                Loanamount, Landarea, Additionaldetail, Accountholdername, Bankname,
                Branchname, IFSCcode, PAN, Aadharcard, PANcard, Bankpassbook, Incomecerti,
                Cropregistercerti, Landcerti, Photo, Signature, userid} = this.state;
        const  values= {FirstName, LastName,FatherName, Age, Sex, Occupation, Address, Aadhar, Phone,
                Maritalstatus, Annualincome, Priority, Subsidytype, Investedamount, Loanaccountnumber,
                Loanamount, Landarea, Additionaldetail, Accountholdername, Bankname,
                Branchname, IFSCcode, PAN, Aadharcard,  PANcard, Bankpassbook, Incomecerti,
                Cropregistercerti, Landcerti, Photo, Signature, userid}

        switch(step){
            case 1:
                return(
                    <Userdetailform
                        nextstep={this.nextstep}
                        handlechange={this.handlechange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <Subsidydetailform
                        nextstep={this.nextstep}
                        prevstep={this.prevstep}
                        handlechange={this.handlechange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <Documentuploadform
                        nextstep={this.nextstep}
                        prevstep={this.prevstep}
                        handlechange={this.handlechange}
                        values={values}
                    />
                )
            case 4:
                return (
                    <Confirm
                        nextstep={this.nextstep}
                        prevstep={this.prevstep}
                        handlechange={this.handlechange}
                        values={values}/>
                )
            case 5:
                return (
                    <Success
                        prevstep={this.prevstep}
                        handlechange={this.handlechange}
                        values={values}
                        myrequests={this.myrequests}/>
                )      
              
        }

    }

    
}

export default Subsidyform ;
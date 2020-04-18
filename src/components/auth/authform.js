import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as action from './../../store/actions/index';

import './authform.css';

class authform extends Component {
    state={
        signupactive: false,
        name:null,
        email:null,
        password:null
    }

    inputchangehandler = input => event =>{
        event.preventDefault();
        this.setState({[input]: event.target.value});
    }

    submithandler = (event) =>{
        event.preventDefault();
        this.props.onauth(this.state.name, this.state.email, this.state.password, this.state.signupactive);
    }

    signupactivator = () =>{
        this.setState({
            signupactive: true
        })
    }

    signinactivator = () =>{
        this.setState({
            signupactive: false
        })
    }

    render(){

        return(
            <div className="auth">
            <div className={this.state.signupactive? "container right-panel-active" : "container"} id="container">
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <span>to access our services</span>
                        <input type="text" placeholder="Name" value={this.state.name} onChange={this.inputchangehandler('name')}/>
                        <input type="email" placeholder="Email" value={this.state.email} onChange={this.inputchangehandler('email')}/>
                        <input type="password" placeholder="Password" value={this.state.password} onChange={this.inputchangehandler('password')}/>
                        <button onClick={this.submithandler}>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        <span>to cotinue access</span>
                        <input type="email" placeholder="Email" value={this.state.email} onChange={this.inputchangehandler('email')}/>
                        <input type="password" placeholder="Password" value={this.state.password} onChange={this.inputchangehandler('password')}/>
                        <button onClick={this.submithandler}>Sign In</button>
                    </form>
                </div>
                    <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost"  onClick={this.signinactivator}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" onClick={this.signupactivator}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onauth:(name, email, password, isSignUp)=> dispatch(action.auth(name=name, email=email, password=password, isSignUp=isSignUp))
    }
}

export default connect(null,mapDispatchToProps)(authform) ;
import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as action from './store/actions/index';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import Header from './components/UI/header/headerComponent';
import Home  from './components/home/home';
import Sell from './components/sell/sell';
import Subsidy from './components/subsidy/Subsidy';
import Shop from './components/shop/shop';
import Subsidyform from './components/subsidy/SubsidyformComponent/Subsidyform';
import Adpostform from './components/sell/adsformComponent/adpostform';
import Auth from './components/auth/authform';
import Modal from './components/UI/Modal/Modal';


class App extends Component {
  componentDidMount(){
    this.props.onautoauth()
  }

  signpageclose = () =>{
    this.props.onclosesignpage()
  }
  
  render(){
    let auth= null;
        if(this.props.signpage){
            auth= <Auth/>
    }
  return (
    <Router>
      <div className="App">
      <Header></Header>
      <Modal show={this.props.signpage} signpageclose={this.signpageclose}>
          {auth}
      </Modal>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/sell" component={Sell}/>
          <Route path="/shop" component={Shop}/>
          <Route path="/subsidy" component={Subsidy}/>
          <Route path='/subsidyform' component={Subsidyform}/>
          <Route path='/adpostform' component={Adpostform}/>
        </Switch>
    </div>
    </Router>
  );
}
}

const mapStateToProps = state =>{
  return{
    signpage: state.auth.signpage
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    onclosesignpage: () => dispatch(action.closesignpage()),
    onautoauth: () => dispatch(action.authcheck())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

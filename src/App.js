import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import Header from './components/UI/header/headerComponent';
import Home  from './components/home/home';
import Sell from './components/sell/sell';
import Subsidy from './components/Subsidy/Subsidy';
import Shop from './components/shop/shop';
import Subsidyform from './components/Subsidy/SubsidyformComponent/Subsidyform';
import Adpostform from './components/sell/adsformComponent/adpostform';

function App() {
  return (
    <Router>
      <div className="App">
      <Header></Header>
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

export default App;

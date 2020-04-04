import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import Header from './components/headerComponent/headerComponent';
import Testimonials from './components/testimonialComponent/testimonials';
import AboutUs from './components/aboutComponent/aboutUs';
import Contact from './components/contactComponent/contactUs';
import Relaible from './components/reliableComponent/reliable';
import Services from './components/servicesComponent/services';
import Gallery from './components/galleryComponent/gallery';
import SignForm from './components/SignFormComponent/SignForm';
import Sell from './containers/sell/sell';
import Subsidy from './containers/Subsidy/Subsidy';
import ShopHome from './containers/buy/shopHome';
import Subsidyform from './components/SubsidyformComponent/Subsidyform';
import Adpostform from './components/adsformComponent/adpostform';

function App() {
  return (
    <Router>
      <div className="App">
      <Header></Header>
        <Switch>
          <Route path="/" exact component={Homee}/>
          <Route path="/signup" component={SignForm}/>
          <Route path="/sell" component={Sell}/>
          <Route path="/buy" component={ShopHome}/>
          <Route path="/subsidy" component={Subsidy}/>
          <Route path='/subsidyform' component={Subsidyform}/>
          <Route path='/adpostform' component={Adpostform}/>
        </Switch>
    </div>
    </Router>
  );
}

const Homee=()=>(
  <div>
      <Gallery></Gallery>
      <AboutUs></AboutUs>
      <Services></Services>
      <Testimonials></Testimonials>
      <Relaible></Relaible>
      <Contact></Contact>
  </div>
);

export default App;

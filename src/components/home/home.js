import React, { Component } from 'react';

import Header from '../UI/header/headerComponent';
import Testimonials from './testimonialComponent/testimonials';
import AboutUs from './aboutComponent/aboutUs';
import Contact from './contactComponent/contactUs';
import Relaible from './reliableComponent/reliable';
import Services from './servicesComponent/services';
import Gallery from './galleryComponent/gallery';

class home extends Component {
    render(){
        return(
            <div>
                <Header></Header>
                <Gallery></Gallery>
                <AboutUs></AboutUs>
                <Services></Services>
                <Testimonials></Testimonials>
                <Relaible></Relaible>
                <Contact></Contact>
            </div>
        )
    }
}
  

export default home ;
import React, { Component } from 'react';
import { Row, Col, Carousel} from 'antd';
import './gallery.css';
import { Button } from 'antd/lib/radio';
class gallery extends Component {
  state = {};

  render() {
    return (
      <div className="gallery" id="gallery">
         <Carousel autoplay>
          <div >
            <Row>
              <Col >
              <img className="image" src="/images/1.jpg"></img>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col>
              <img className="image" src="/images/2.jpg"></img>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col>
              <img className="image" src="/images/3.jpg"></img>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col>
              <img className="image" src="/images/4.jpg"></img>
              </Col>
            </Row>
          </div>
        </Carousel>
        <div className="tagline"> 
          <h1>Trade Smart - Purchase Smart - Cultivate Smart</h1>
        </div>
      </div>
    );
  }
}

export default gallery;

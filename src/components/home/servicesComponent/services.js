import React, { Component } from 'react';
import { Col, Row, Card } from 'antd';
import './services.css';
class Services extends Component {
  state = {};

  render() {
    const { Meta } = Card;
    return (
      <div className="services_main" id="services">
        <Row>
          <Col md={5} offset={4}>
            <Card
              hoverable
              style={{ width: 280 }}
              cover={<img alt="example" src="images/buy3.jfif"/>}
            >
              <a href="/shop"><Meta title="Shop" /></a>
            </Card>
          </Col>
          <Col md={5} offset={1}>
            <Card
              hoverable
              style={{ width: 300 }}
              cover={<img alt="example" src="images/buy1.jfif" />}
            >
              <a href="/sell"><Meta title="Sell" /></a>
            </Card>
          </Col>
          <Col md={5} offset={1}>
            <Card
              hoverable
              style={{ width: 300 }}
              cover={<img alt="example" src="images/care1.jfif" />}
            >
              <a href="/subsidy"><Meta title="Subsidy" /></a>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Services;

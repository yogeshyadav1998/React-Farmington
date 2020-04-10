import React from 'react';

import {Row, Col, Card} from 'antd';
import "./subsidyrequest.css";

const subsidyrequest = (props) =>{
    const status = "panding...";

    return (
        <div className="cardbackground">
        <Card title={props.subsidytype} bordered={false} style={{ width: 900 }}>
          <Row>
              <Col md={15}offset={2}>
                <h3>Submitted BY: {props.applier}</h3>
              </Col>
              <Col>
                <h3>Status: {status}</h3>
              </Col>
          </Row>
        </Card>
      </div>
    )
}

export default subsidyrequest;
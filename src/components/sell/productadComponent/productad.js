import React from 'react';

import { Card, Icon, Avatar } from 'antd';
import './productad.css'

const { Meta } = Card;

const productad = (props) => {
    const description= <p>Rs. {props.price} /kg</p>
    return(
        <div className="ad">
            <Card
                style={{ width: 300 }}
                cover={
                <img
                    alt="example"
                    src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
                }
                actions={[
                <Icon type="heart" key="like" />,
                <Icon type="edit" key="edit" />,
                <Icon type="delete" key="delete" />
                ]}
                >
                <Meta
                title={props.productname}
                description = {description}
                />
            </Card>
        </div>
    )
}

export default productad;
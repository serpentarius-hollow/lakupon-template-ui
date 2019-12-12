import React from 'react'
import 'antd/dist/antd.css';
import './Carousel.css';

import { Carousel } from 'antd'

const carousel = () => {
    return (
        <Carousel autoplay>
            <div>
                <h3>1</h3>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
        </Carousel>
    )
}

export default carousel
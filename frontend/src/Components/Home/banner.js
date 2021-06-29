import React from 'react'
import { Carousel } from 'antd';
import Slide1 from '../../Assets/img/slide1.jpg'
import Slide2 from '../../Assets/img/slide2.jpg'
import Slide3 from '../../Assets/img/slide3.jpg'


function onChange(a, b, c) {
    console.log(a, b, c);
}

const contentStyle = {
    color: '#fff',
    textAlign: 'center',
};


export default function Banner() {
    return (
        <Carousel afterChange={onChange}>
            <div>
                <img className='carousal-img' src={Slide1} height='100%' width='100%'/>
            </div>
            <div>
                <img  className='carousal-img' src={Slide2} height='100%' width='100%'/>
            </div>
            <div>
                <img  className='carousal-img' src={Slide3} height='100%' width='100%'/>
            </div>
        </Carousel>
    )
}





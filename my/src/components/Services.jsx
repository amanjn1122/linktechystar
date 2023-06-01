import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/3.jpg'
import img2 from '../assets/4.jpg'

const Services = () => {
  return (
    <div>
        <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000} showThumbs={false} showIndicators={true}>
            <div>
                <img src={img1} alt="Item1" />
                <p className='legend'>full stack</p>
            </div>
            <div>
                <img src={img2} alt="Item2" />
                <p className='legend'>peer-to-peer support</p>
            </div>
        </Carousel>
    </div>
  )
}

export default Services
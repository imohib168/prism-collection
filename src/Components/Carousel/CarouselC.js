import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";

export const CarouselC = () => {
    return (
        <Carousel autoPlay="true" infiniteLoop="true" stopOnHover="true">
            <div className="Image">
                <img className="iiimg" src="https://images.unsplash.com/photo-1616706446928-29a0ce0bb79a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE2OTY0MTEy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1500" />
            </div>
            <div className="Image">
                <img src="https://images.unsplash.com/photo-1616743505981-e9c9d4421abc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE2OTY0MjM3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1500" />
            </div>
            <div className="Image">
                <img src="https://images.unsplash.com/photo-1616879672463-8154008ea19d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE2OTYzOTcz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1500" />
            </div>
            <div className="Image">
                <img src="https://images.unsplash.com/photo-1616715623022-65d18f0042ae?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE2OTY0MjE1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1500" />
            </div>
        </Carousel>
    )
}

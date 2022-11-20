import { Carousel } from "antd";
import React from "react";
import "./index.less";


const HomeCarousel: React.FC = () => {
    return (
        <Carousel className="carousel" arrows={true}>
            <div>
                <h3 className="carousel-item carousel-1">1</h3>
            </div>
            <div>
                <h3 className="carousel-item carousel-2">2</h3>
            </div>
            <div>
                <h3 className="carousel-item carousel-3">3</h3>
            </div>
            <div>
                <h3 className="carousel-item carousel-4">4</h3>
            </div>
        </Carousel>
    );
}

export default HomeCarousel;
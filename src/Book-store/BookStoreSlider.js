import React from "react";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { CustomSlide } from "../Shared/Components/CustomSlide";
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export default function BookStoreSliderComponent({ slides }) {
    const bgPalates = [
        { gradient: 'linear-gradient(45deg, rgba(249,212,35,1) 0%, rgba(255,78,80,1) 100%)', bg: '#ff4e50' },
        { gradient: 'linear-gradient(45deg, rgba(0,242,96,1) 0%, rgba(5,117,230,1) 100%)', bg: '#045eb8' },
        { gradient: 'linear-gradient(45deg, rgba(75,108,183,1) 0%, rgba(24,40,72,1) 100%)', bg: '#93a7d4' },
        { gradient: 'linear-gradient(45deg, rgba(26,41,128,1) 0%, rgba(38,208,206,1) 100%)', bg: '#26D0CE' },
        { gradient: 'linear-gradient(45deg, rgba(142,45,226,1) 0%, rgba(74,0,224,1) 100%)', bg: '#b799f3' },
        { gradient: 'linear-gradient(45deg, rgba(204,43,94,1) 0%, rgba(117,58,136,1) 100%)', bg: '#66162f' },
        { gradient: 'linear-gradient(45deg, rgba(28,181,224,1) 0%, rgba(0,0,70,1) 100%)', bg: '#49c4e6' },
    ]

    return slides?.length > 0 ?
        (
            <>
                <Carousel
                    responsive={responsive}
                    swipeable={true}
                    draggable={true}
                    infinite={true}
                    centerMode={true}
                    autoPlay={false}
                    autoPlaySpeed={10000}
                    keyBoardControl={true}
                    minimumTouchDrag={50}
                    additionalTransfrom={0}
                    pauseOnHover
                    slidesToSlide={1}
                    containerClass="carousal-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {slides.map((slide, index) => (<CustomSlide key={index} slide={slide} bgColor={bgPalates[Math.round(index + 1) % bgPalates.length]} />))}
                </Carousel>
            </>
        ) : (
            <>
                {/* No Slides */}
            </>
        );
}

import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import styled from 'styled-components';
import img1 from "./Images/jess-snoek-rDud6SN-ZVo-unsplash.jpg";
import img2 from "./Images/recal-media-ueBIGLmiI5A-unsplash.jpg";
import img3 from "./Images/oleg-illarionov-q9q8bi0Aw7o-unsplash.jpg";
import img4 from "./Images/vitalii-tkachenko-lQ9lHXL73e8-unsplash.jpg";
import CoverContent from './CoverContent';
const Cover = () => {
    const options = {
        items: 1,
        rewind: true,
        autoplay: true,
        loop:true,
        nav:false,
    };
    const Slider=styled.div`
        width: 100%;
        height: 100vh;
        z-index: 2;
    `
    const Before = styled.div`
        &{
            width: 100%;
            height: 100vh;
            position: relative;
            z-index: 1;
        }
        &::before{
            position: absolute;
            z-index:2;
            content: '';
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            background-color: #4242425d;
        }
    `
    return ( 
        <Before>
            <OwlCarousel options={options} >
                <Slider><img src={img1} alt="" /></Slider>
                <Slider><img src={img2} alt="" /></Slider>
                <Slider><img src={img3} alt="" /></Slider>
                <Slider><img src={img4} alt="" /></Slider>
            </OwlCarousel>
            <CoverContent/>
        </Before>
     );
}
 
export default Cover;
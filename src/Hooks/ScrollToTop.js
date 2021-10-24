import {  faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import { useState,useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ScrollToTop = () => {

    const Icon = styled.div`
        &{
            position: fixed;
            bottom: 20px;
            right: 20px;
            font-size: 50px;
            cursor: pointer;
            border: none;
            color:#FFA000;
            z-index: 4;
    }
    &:active{
        transform: scale(0.8);
    }
    `

    const[ScrollToTop,setScrollToTop] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.pageYOffset > 200){
                setScrollToTop(true);
            }
            else{
                setScrollToTop(false)
            }
        })
    }, [])
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return ( 
        <div>
            {ScrollToTop && <Icon onClick = {scrollToTop}>
                    <FontAwesomeIcon icon={faArrowAltCircleUp}/>
                </Icon> }
        </div>
     );
}
 
export default ScrollToTop;
import img1 from "../Images/xintro.png.pagespeed.ic.wRAmcK6-ty.jpg";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheckDouble, faHiking, faSmile } from "@fortawesome/free-solid-svg-icons";
import CountUp from 'react-countup';
import { useState,useEffect } from "react";
const AboutUsComponent = () => {
    const[ScrollToTop,setScrollToTop] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            console.log(window.pageYOffset);
            if(window.pageYOffset >= 400){
                setScrollToTop(true);
            }
            else{
                setScrollToTop(false)
            }
        })
    }, []);
    const Container = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
    `
    const SubContainer = styled.div`
        display: flex;
        margin: 3%;
        @media screen and (max-width: 800px){
            flex-direction: column;
        }
    `
    const Secleft = styled.div`
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        width:50%;
        @media screen and (max-width: 800px){
           flex-direction: column;
           justify-content: left;
        }
    `
    const Secright = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width:50%;
    @media screen and (max-width: 800px){
       flex-direction: column;
       justify-content: right;
    }
`
    const ImageContainer = styled.div`
        padding: 0;
        margin: 0;
        @media screen and (max-width: 800px){
           width: 300px;
           height: 250px;
        }
    `
    const Image = styled.img`
        margin: 0;
        padding: 0;
        @media screen and (max-width: 800px){
           width: 300px;
           height: 250px;
        }
    `
    const AboutUsHeader = styled.div`
        padding: 0;
        font-size: 35px;
        font-weight: bold;
        font-variant: small-caps;
        @media screen and (max-width: 800px){
            font-size: 20px;
            margin-bottom: 5%;
        }
    `
    const Desc = styled.div`
        text-align: justify;
        @media screen and (max-width: 800px){
            font-size: 12px;

        }
        
    `
    const Button = styled.button`
        &{
            position: relative;
            top: -5%;
            width: 150px;
            height: 45px;
            color: #fff;
            background-color: #FFA000;
            transition: color 0.3s;
            font-weight:bold;
            cursor: pointer;
            position: relative;
            z-index:1;
            border-radius: 20px;
            border: none;
        }
        &:active{
            transform: scale(0.95);
        }
        @media screen and (max-width: 800px) {
            width:100px;
            height: 35px;
            font-size: 12px;
            margin-top: 5%;
        }
    `
    const SubContainer1 = styled.div`
        display: flex;
        justify-content: center;
        width: 100%;
        align-items: center;
        margin: 5% 0;
    `
    const Sec1 = styled.div`
        width: 100%;
    `
    const Icon = styled.div`
        font-size: 100px;
        margin: 10px 10px 45px 10px;
        color: #FFA000;
        display: flex;
        align-items: center;
        justify-content: center;
        @media screen and (max-width: 800px){
            font-size: 30px;
            margin: 5px 5px 22.5px 5px;
        }
    `
    const Count = styled.div`
        font-size: 60px;
        @media screen and (max-width: 800px){
            font-size: 20px;
        }
    `
    const Text = styled.div`
        font-size: 20px;
        font-weight: 700;
        opacity: 0.5;
        margin: 2% 0;
        @media screen and (max-width: 800px){
            font-size: 10px;
        }
    `
    const SubContainer2 = styled.div`
        display: flex;
        justify-content: center;
        flex-wrap:wrap;
        align-items: center;
        background-color: #FFF8E1;
        padding: 5%;
    `
    const Sec2 = styled.div`
        margin: 2% 0;
        height: 10rem;
    `
    const Header = styled.div`
        text-align: center;
        font-size: 40px;
        color: #0e0900;
        font-variant: small-caps;
        font-weight: bold;
        position: relative;
        border-bottom: 3px solid #FFA000;
        display: inline;
        @media screen and (max-width: 800px){
            font-size: 20px;
        }
    `
    const Text1 = styled.div`
        text-align: justify;
        margin: 2% 0;
        @media screen and (max-width: 800px){
            font-size: 12px;
        }
    `
    
    return ( 
        <Container>
            <SubContainer1>
                <Sec1>
                    <Icon><FontAwesomeIcon icon={faCheckDouble}/></Icon>
                    <Text>Tour has done successfully</Text>
                    <div>{ScrollToTop && <Count><CountUp end={4560} duration={1}/></Count>}</div>
                    
                </Sec1>
                <Sec1>
                    <Icon><FontAwesomeIcon icon={faSmile}/></Icon>
                    <Text>Positive Feedback</Text>
                    <div>{ScrollToTop && <Count><CountUp end={456} duration={1}/></Count>}</div>
                    
                </Sec1>
                <Sec1>
                    <Icon><FontAwesomeIcon icon={faHiking}/></Icon>
                    <Text>Yearly tour arrange</Text>
                    <div>{ScrollToTop && <Count><CountUp end={120} duration={1}/></Count>}</div>
                    
                </Sec1>
            </SubContainer1>
            <SubContainer>
                <Secleft>
                    <ImageContainer data-aos="zoom-in-right"><Image src={img1}/></ImageContainer>
                </Secleft>
                <Secright>
                    <AboutUsHeader data-aos="fade-left" data-aos-duration="500">We Have The Best Tours</AboutUsHeader>
                    <Desc data-aos="fade-left" data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores quam libero consectetur eum incidunt esse, tempora fugit architecto obcaecati hic temporibus voluptates blanditiis ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae suscipit. Provident, natus similique. Explicabo nam quia hic doloremque incidunt atque ab suscipit aspernatur fuga dicta modi sequi placeat, sunt facere consequatur corporis, harum sed esse odio ipsum? Ab nesciunt ad, similique explicabo voluptate alias.</Desc>
                    <Button data-aos="fade-left" data-aos-duration="1500">Explore Now</Button>
                </Secright>
            </SubContainer>
            <SubContainer2>
                <Sec2>
                    <Header data-aos="zoom-in" data-aos-duration="1500">Our Mission</Header>
                    <Text1 data-aos="fade-right" data-aos-duration="2000">Lorem ipsum dolor sit  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptatum corrupti illo, voluptas in culpa molestias repellendus? Ipsa sequi obcaecati non fugiat sapiente? Provident repellendus ratione dicta maiores, culpa fugit nemo magnam a, laboriosam sit facilis maxime, eum commodi explicabo.</Text1>
                </Sec2>
                <Sec2>
                    <Header data-aos="zoom-in" data-aos-duration="1500">Our Vision</Header>
                    <Text1 data-aos="fade-right" data-aos-duration="2000">  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptatum corrupti illo, voluptas in culpa molestias repellendus? Ipsa sequi obcaecati non fugiat sapiente? Provident repellendus ratione dicta maiores, culpa fugit nemo magnam a, laboriosam sit facilis maxime, eum commodi explicabo.</Text1>
                </Sec2>
            </SubContainer2>
        </Container>
     );
}
 
export default AboutUsComponent;
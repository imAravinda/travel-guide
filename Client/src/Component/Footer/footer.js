import img from "../Images/Logo-removebg-preview.png"
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
    const Div = styled.div`
        background: #212121;
        color: #FFF8E1;
        z-index: 3;
    `
    const Sec = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 10px 0;
    `
    const Div1 = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        flex-basis: 80%;
        margin: 40px 0;
    `
    const H3 = styled.h3`
        font-size: 25px;
        text-align: left;
        margin-bottom: 10%;
        @media screen and (max-width:800px){
            font-size: 15px;
        }
    `
    const Text = styled.div`
        text-align: center;
        flex-basis: 90%;
        @media screen and (max-width:800px){
            font-size: 12px;
            text-align: justify;
        }
    ` 
    const SubDiv = styled.div`
        text-align: left;
        @media screen and (max-width:800px){
            font-size: 12px;
            margin: 5px;
        }
    `
    const H2 = styled.h2`
        font-size: 40px;
        @media screen and (max-width:800px){
            font-size: 20px;
            text-align: center;
        }
    `
    const Hr = styled.hr`
        width: 220px;
        height: 3px;
        background: #FFA000;
        position: relative;
        left: 42%;
        margin-bottom: 10px;
        border: none;
        @media screen and (max-width:800px){
            width: 110px;
            left: 33%;
        }
    `
    const Icon = styled.div`
        &{
        font-size: 30px;
        padding: 10px;
        cursor: pointer;
    }
    &:active{
        transform: scale(0.8);
    }
    @media screen and (max-width:800px){
            font-size: 20px;
        }
    `
    const HR = styled.hr`
        border: none;
        background: #ffffff2d;
        height: 2px;
        margin: 10px 0;
    `
    return ( 
        <Div>
            <Sec>
                <div>
                    <img src={img} alt="" />
                </div>
                <Text>
                    <H2>Travel Guide</H2>
                    <Hr />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti impedit adipisci veniam dolorem ratione pariatur optio voluptates natus cum voluptatibus ab eligendi et in sapiente, 
                    distinctio incidunt asperiores vitae numquam eius mollitia facere exercitationem? Ea.</p>
                </Text>
            </Sec>
            <Sec>
                <Div1>
                    <SubDiv>
                        <H3>Get in Touch</H3>
                        <p>Email        : example@gmail.com</p>
                        <p>Contact No   : +94752556432</p>
                        <p>Like Us On   : www.facebook.com/example</p>
                    </SubDiv>
                    <SubDiv>
                        <H3>Address</H3>
                        <p>
                                No.102 <br />
                                Main street, <br />
                                Kollupitiya, <br />
                                Colombo 7.
                        </p>
                    </SubDiv>
                </Div1>
            </Sec>
            <Sec>
                <Icon>
                    <FontAwesomeIcon icon={faFacebook}/>
                </Icon>
                <Icon>
                    <FontAwesomeIcon icon={faTwitter}/>
                </Icon>
                <Icon>
                    <FontAwesomeIcon icon={faLinkedin}/>
                </Icon>
                <Icon>
                    <FontAwesomeIcon icon={faInstagram}/>
                </Icon>
            </Sec>
            <Sec>
                <p>Developed By <Link className = "li" to="/Developer">Aravinda Chathuranga Fernando</Link></p>
            </Sec>
            <HR />
            <Sec>
                <p>@{new Date().getFullYear()} Travel Guide | All Right reseved </p>
            </Sec>
        </Div>
     );
}
 
export default Footer;
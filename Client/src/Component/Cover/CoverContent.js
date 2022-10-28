import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CoverContent = (props) => {
        const Sec = styled.div`
        position: absolute;
        top: 30%;
        z-index: 2;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    `
    const Divsec = styled.div`
        flex-basis: 80%;
        margin: 0 0px 20px 35px ;
        
    `
    const H1 = styled.h1`
        font-size: 75px;
        color: #FFF8E1;
        text-align: left;
        @media screen and (max-width:800px){
            font-size: 35px;
            letter-spacing:1px;
        }
    `
    const HR = styled.hr`
        width: 10%;
        height: 3px;
        background: #FFA000;
        border: none;
        margin-bottom: 10px;
    `
    const P = styled.p`
        text-align:justify;
        color: #FFF8E1;
        @media screen and (max-width: 800px) {
            font-size: 12px;
        }
    `
    const Button = styled.button`
    &{
        width: 150px;
        height: 40px;
        color:#fff;
        background: #FFA000;
        border: none;
        margin-top: 8%;
        cursor: pointer;
        position: relative;
        right: 1.5%;
        border-radius: 20px;
    }
    &:active{
        transform: scale(0.95);
    }
    @media screen and (max-width: 800px) {
        width:100px;
        height: 35px;
        font-size: 12px;
    }
    `
    return ( 
            <Sec>
                <Divsec data-aos={"fade-right"}>   
                    <H1 >{props.text.header}</H1>
                    <HR />
                </Divsec>
                <Divsec data-aos={"fade-right"}>
                    <P>{props.text.desc}</P>
                </Divsec>
                <Divsec data-aos={"fade-right"}>
                    <Button><Link className = "li" to="/Login">Book Now</Link></Button>
                </Divsec>
            </Sec>
     );
}
 
export default CoverContent;
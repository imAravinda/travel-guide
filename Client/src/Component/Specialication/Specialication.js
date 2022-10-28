import { faGlobeAsia, faHotel, faTrain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
const Specialication = () => {
    const Div = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 3% 0;
        @media screen and (max-width:800px){
            margin: 0;
        }
    `
    const H1 = styled.h1`
        text-align: center;
        font-size: 40px;
        color: #0e0900;
        font-variant: small-caps;
        font-weight: bold;
        position: relative;
        left: 0;
        border-bottom: 3px solid #FFA000;
        display: inline;
        @media screen and (max-width:800px){
            font-size: 20px;
        }
    `
    const MainSubSec = styled.div`
        display: flex;
        justify-content: space-around;
        align-items: center;
        @media screen and (max-width:800px){
            margin: 0;
        }
    `
    const Sec = styled.div`
        flex-basis: 100%;
        margin: 20px 10px;
        width: 100%;
        
    `
    const SubSec = styled.div`
        margin: 15px;
        @media screen and (max-width:800px){
            margin: 5px;
        }
    `
    const Icon = styled.div`
        font-size: 80px;
        margin: 10px 10px 45px 10px;
        color: #FFA000;
        display: flex;
        align-items: center;
        justify-content: center;
        @media screen and (max-width:800px){
            font-size: 40px;
            margin: 0;
        }
    `
    const H2 = styled.h2`
        margin: 10px 10px 20px 10px;
        font-variant: inherit;
        @media screen and (max-width:800px){
            font-size: 15px;
        }
    `
    const P = styled.p`
        font-size: 18px;
        text-align: center;
        @media screen and (max-width:800px){
            font-size: 12px;
        }
    `
    return ( 
        <Div>
            <Sec data-aos="zoom-in">
                <H1>What Makes Us Special</H1>
            </Sec>
            <Sec data-aos="zoom-up">
                <MainSubSec>
                <SubSec>
                    <Icon>
                        <FontAwesomeIcon icon = {faTrain}/>
                    </Icon>
                    <H2>Safe Journey</H2>
                    <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Vitae nesciunt incidunt non cupiditate optio ut aliquid harum, 
                        fugiat debitis repellendus?</P>
                </SubSec>
                <SubSec data-aos="zoom-up">
                    <Icon>
                        <FontAwesomeIcon icon = {faHotel}/>
                    </Icon>
                    <H2>Delicious Foods and Lodgings</H2>
                    <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Vitae nesciunt incidunt non cupiditate optio ut aliquid harum, 
                        fugiat debitis repellendus?</P>
                </SubSec>
                <SubSec data-aos="zoom-up">
                    <Icon>
                        <FontAwesomeIcon icon = {faGlobeAsia}/>
                    </Icon>
                    <H2>Amazing Destinations</H2>
                    <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Vitae nesciunt incidunt non cupiditate optio ut aliquid harum, 
                        fugiat debitis repellendus?</P>
                </SubSec>
                </MainSubSec>
            </Sec> 
        </Div>
     );
}
 
export default Specialication;
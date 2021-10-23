import { faGlobeAsia, faHotel, faTrain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Specialication = () => {
    const Div = styled.div`
        display: block;
        margin: 10px;
        height: 470px;
    `
    const H1 = styled.h1`
        &{
        text-align: center;
        font-size: 40px;
        color: #0e0900;
        font-variant: small-caps;
        font-weight: bold;
        position: relative;
    }
    &::after{
        content: 'What Makes Us Special';
        opacity: 0.5;
        position: absolute;
        left: 37.89%;
        top: -1.5px;
    }
    `
     const HR = styled.hr`
        height: 3px;
        background: #FFA000;
        border: none;
        margin-top: 10px;
        width: 60%;
        position: relative;
        left: 20%;
    `
    const Sec = styled.div`
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 80px 10px;
    `
    const SubSec = styled.div`
        margin: 15px;
    `
    const Icon = styled.div`
        font-size: 80px;
        margin: 10px 10px 45px 10px;
        color: #FFA000;
        display: flex;
        align-items: center;
        justify-content: center;
    `
    const H2 = styled.h2`
        margin: 10px 10px 20px 10px;
        font-variant: inherit;
    `
    const P = styled.p`
        font-size: 18px;
        text-align: center;
    `
    return ( 
        <Div>
            <H1>What Makes Us Special</H1>
            <HR />
            <Sec>
                <SubSec>
                    <Icon>
                        <FontAwesomeIcon icon = {faTrain}/>
                    </Icon>
                    <H2>Safe Journey</H2>
                    <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Vitae nesciunt incidunt non cupiditate optio ut aliquid harum, 
                        fugiat debitis repellendus?</P>
                </SubSec>
                <SubSec>
                    <Icon>
                        <FontAwesomeIcon icon = {faHotel}/>
                    </Icon>
                    <H2>Delicious Foods and Lodgings</H2>
                    <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Vitae nesciunt incidunt non cupiditate optio ut aliquid harum, 
                        fugiat debitis repellendus?</P>
                </SubSec>
                <SubSec>
                    <Icon>
                        <FontAwesomeIcon icon = {faGlobeAsia}/>
                    </Icon>
                    <H2>Amazing Destinations</H2>
                    <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Vitae nesciunt incidunt non cupiditate optio ut aliquid harum, 
                        fugiat debitis repellendus?</P>
                </SubSec>
            </Sec> 
        </Div>
     );
}
 
export default Specialication;
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import styled from 'styled-components';
import Destination from '../../Data/DestinationInfo';
const Destinations = () => {
    const Des = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 0 5% ;
        margin-top: 5%;
        @media screen and (max-width:800px){
            padding: 0%;
        }
    `
    const Row = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    `
    const Sec = styled.div`
        flex-basis: 100%;
        padding: 0 5px;
        width: 100%;
        margin-bottom : 5%;
        
    `
    const Slider=styled.div`
        height: 400px;
        width: 430px;
        z-index: 2;
        border-radius: 10px;
        position: relative;
        flex-direction: column;
        flex: 0 1 25%;
        justify-content: center;
        align-items: center;
        margin: 0 10px;
        @media screen and (max-width: 800px){
            height: 140px;
            width: 140px;
            margin: 1.2%;
        }
    `
    const Img = styled.img`
        width: 430px;
        height: 350px;
        border-radius: 10px;
        @media screen and (max-width: 800px){
            height: 140px;
            width: 140px;
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
        margin-bottom: 40px;
        border-bottom: 3px solid #FFA000;
        display: inline;
        @media screen and (max-width: 800px){
            font-size: 20px;
        }
    `
    const HR = styled.hr`
        height: 3px;
        background: #ffffff;
        border: none;
        margin: 10px ;
        @media screen and (max-width: 800px){
            height: 1.5px;
        }
    `
    const H3 = styled.h3`
        color: #ffffff;
        margin: 10px;
        @media screen and (max-width: 800px){
            font-size: 12px;
        }
    `
    const P = styled.p`
        color: #fff;
        @media screen and (max-width: 800px){
            font-size: 8px;
        }
    `
    return ( 
        <Des>
            <Sec>
                <H1>Top Destinations</H1>
            </Sec>
            <Sec>
                <Row>
                    {
                        Destination.map(destination => {
                            return(
                                <Slider className="slider"data-aos="flip-right" data-aos-duration="2000" >
                                    <div>
                                        <Img src={destination.img} alt="" />
                                    </div>
                                    <div className="overlay"></div>
                                    <div className="text">
                                        <H3>{destination.Name}</H3>
                                        <HR />
                                        <P>{destination.Description}</P>
                                    </div>
                                </Slider>      
                            )
                        })
                    }
                </Row>
            </Sec>
            
        </Des>
     );
}
 
export default Destinations;
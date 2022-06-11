import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import img1 from "./Images/IMG_3573.JPG";
import img2 from "./Images/daniele-franchi-S9LN3vb47gw-unsplash.jpg";
import img3 from "./Images/Araugambay.jpg"
import img4 from "./Images/Adams_Peack.jpg"
import img5 from "./Images/DunsinaneFall.jpg"
import img6 from "./Images/Ellarock.jfif"
import img7 from "./Images/Hikkaduwa.jpg"
import img8 from "./Images/Knuckels.jpg"
import img9 from "./Images/OldDutchFort.jpg"
import styled from 'styled-components';
const Destinations = () => {
    const Des = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 0 5% ;
        margin-top: 5%;
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
        
    `
    const Img = styled.img`
        width: 430px;
        height: 350px;
        border-radius: 10px;
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
    `
    const HR = styled.hr`
        height: 3px;
        background: #ffffff;
        border: none;
        margin: 10px ;
        
    `
    const H3 = styled.h3`
        color: #ffffff;
        margin: 10px;
    `
    const P = styled.p`
        color: #fff;
    `
    const Destination = [
        {
            img:`${img1}`,
            Name: "Bathalangonduwa",
            Description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat illum minima unde eaque totam veniam reprehenderit tempore, autem est illo, voluptatum, nulla sed minus amet?"
        },
        {
            img:`${img2}`,
            Name: "Sigiriya",
            Description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat illum minima unde eaque totam veniam reprehenderit tempore, autem est illo, voluptatum, nulla sed minus amet?"
        },
        {
            img:`${img3}`,
            Name: "Arugam-Bay",
            Description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat illum minima unde eaque totam veniam reprehenderit tempore, autem est illo, voluptatum, nulla sed minus amet?"
        },
        {
            img:`${img4}`,
            Name: "Adem's Peak",
            Description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat illum minima unde eaque totam veniam reprehenderit tempore, autem est illo, voluptatum, nulla sed minus amet?"
        },
        {
            img:`${img5}`,
            Name: "Dunsinun Falls",
            Description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat illum minima unde eaque totam veniam reprehenderit tempore, autem est illo, voluptatum, nulla sed minus amet?"
        },
        {
            img:`${img6}`,
            Name: "Ella Rock",
            Description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat illum minima unde eaque totam veniam reprehenderit tempore, autem est illo, voluptatum, nulla sed minus amet?"
        },
        {
            img:`${img7}`,
            Name: "Hikkaduwa",
            Description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat illum minima unde eaque totam veniam reprehenderit tempore, autem est illo, voluptatum, nulla sed minus amet?"
        },
        {
            img:`${img8}`,
            Name: "Knuckles Mountain Range",
            Description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat illum minima unde eaque totam veniam reprehenderit tempore, autem est illo, voluptatum, nulla sed minus amet?"
        },
        {
            img:`${img9}`,
            Name: "Galle Old Dutch Fort",
            Description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat illum minima unde eaque totam veniam reprehenderit tempore, autem est illo, voluptatum, nulla sed minus amet?"
        }
    ]
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
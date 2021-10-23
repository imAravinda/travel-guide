import OwlCarousel from 'react-owl-carousel2';
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
    const options = {
        items: 3,
        rewind: true,
        autoplay: true,
        loop:true,
        nav:false,
    };
    const Slider=styled.div`
        height: 430px;
        width: 470px;
        z-index: 2;
        padding: 10px;
        border-radius: 20px;
    `
    const Des = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-basis: 80%;
        flex-wrap: wrap;
        position: relative;
        left: 0%;
    `
    const Img = styled.img`
        width: 470px;
        height: 380px;
        border-radius: 20px;
    `
    const H1 = styled.h1`
    &{
        text-align: center;
        font-size: 40px;
        color: #0e0900;
        font-variant: small-caps;
        font-weight: bold;
        position: relative;
        left: 0;
        margin: 20px 0;;
    }
    &::after{
        content: 'Destinations';
        opacity: 0.5;
        position: absolute;
        left: 1.5%;
        top: -1.5px;
    }
    `
    const HR = styled.hr`
        height: 3px;
        background: #ffffff;
        border: none;
        margin: 10px 100px;
    `
    const HR1 = styled.hr`
        height: 3px;
        background: #FFA000;
        border: none;
        margin: 20px;
        width: 490%;
        position: relative;
        right: 200%;
    `
    const H3 = styled.h3`
        color: #ffffff;
        margin: 10px;
    `
    const P = styled.p`
        color: #fff;
    `
    return ( 
        <Des>
            <div>
                <H1>Destinations</H1>
                <HR1/>
            </div>
            <OwlCarousel options={options}>
                <Slider className="slider">
                    <div>
                        <Img src={img1} alt="" />
                    </div>
                    <div className="overlay"></div>
                    <div className="text">
                        <H3>Bathhalangonduwa</H3>
                        <HR />
                        <P>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Quaerat illum minima unde eaque totam veniam reprehenderit tempore, 
                            autem est illo, voluptatum, nulla sed minus amet?</P>
                    </div>
                </Slider>
                <Slider className="slider">
                    <div>
                        <Img src={img2} alt="" />
                    </div>
                    <div className="overlay"></div>
                    <div className="text">
                        <H3>Sigiriya</H3>
                        <HR />
                        <P>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Quaerat illum minima unde eaque totam veniam reprehenderit tempore, 
                            autem est illo, voluptatum, nulla sed minus amet?</P>
                    </div>    
                </Slider>
                <Slider className="slider">
                    <div>
                        <Img src={img3} alt="" />
                    </div>
                    <div className="overlay"></div>
                    <div className="text">
                        <H3>Arugam Bay</H3>
                        <HR />
                        <P>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Quaerat illum minima unde eaque totam veniam reprehenderit tempore, 
                            autem est illo, voluptatum, nulla sed minus amet?</P>
                    </div>    
                </Slider>
                <Slider className="slider">
                    <div>
                        <Img src={img4} alt="" />
                    </div>
                    <div className="overlay"></div>
                    <div className="text">
                        <H3>Adam's Peak</H3>
                        <HR />
                        <P>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Quaerat illum minima unde eaque totam veniam reprehenderit tempore, 
                            autem est illo, voluptatum, nulla sed minus amet?</P>
                    </div>
                </Slider>
                <Slider className="slider">
                    <div>
                        <Img src={img5} alt="" />
                    </div>
                    <div className="overlay"></div>
                    <div className="text">
                        <H3>Dunsinane Fall</H3>
                        <HR />
                        <P>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Quaerat illum minima unde eaque totam veniam reprehenderit tempore, 
                            autem est illo, voluptatum, nulla sed minus amet?</P>
                    </div>
                </Slider>
                <Slider className="slider">
                    <div>
                        <Img src={img6} alt="" />
                    </div>
                    <div className="overlay"></div>
                    <div className="text">
                        <H3>Ella Rock</H3>
                        <HR />
                        <P>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Quaerat illum minima unde eaque totam veniam reprehenderit tempore, 
                            autem est illo, voluptatum, nulla sed minus amet?</P>
                    </div>
                </Slider>
                <Slider className="slider">
                    <div>
                        <Img src={img7} alt="" />
                    </div>
                    <div className="overlay"></div>
                    <div className="text">
                        <H3>Hikkaduwa</H3>
                        <HR />
                        <P>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Quaerat illum minima unde eaque totam veniam reprehenderit tempore, 
                            autem est illo, voluptatum, nulla sed minus amet?</P>
                    </div>
                </Slider>
                <Slider className="slider">
                    <div>
                        <Img src={img8} alt="" />
                    </div>
                    <div className="overlay"></div>
                    <div className="text">
                        <H3>Knuckels Mountain Range</H3>
                        <HR />
                        <P>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Quaerat illum minima unde eaque totam veniam reprehenderit tempore, 
                            autem est illo, voluptatum, nulla sed minus amet?</P>
                    </div>
                </Slider>
                <Slider className="slider">
                    <div>
                        <Img src={img9} alt="" />
                    </div>
                    <div className="overlay"></div>
                    <div className="text">
                        <H3>Old Dutch Fort - Galle</H3>
                        <HR />
                        <P>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Quaerat illum minima unde eaque totam veniam reprehenderit tempore, 
                            autem est illo, voluptatum, nulla sed minus amet?</P>
                    </div>
                </Slider>
            </OwlCarousel>
        </Des>
     );
}
 
export default Destinations;
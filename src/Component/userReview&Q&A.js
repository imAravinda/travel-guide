import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import styled from 'styled-components';
import img1 from "./Images/user1.jpg";
import img2 from "./Images/user2.jpg";
import img3 from "./Images/user3.jpg"
import img4 from "./Images/user4.jpg"
const Testimonials = () => {

    const options = {
        items: 1,
        rewind: true,
        autoplay: true,
        loop:true,
        nav:false,
    }
    const Div = styled.div`
        display: flex;
        align-items: center;
        padding: 0 5%;
        height: 100vh;
        margin-bottom: 3%;
    `
    const SecLeft = styled.div`
        width: 50%;
        margin-bottom : 5%;
        height: 400px;
    `
    const SecRight = styled.div`
        display: grid;
        width: 50%;
        margin-bottom : 5%;
        height: 400px;
        justify-content: right;
        padding-right:2%;
    `
    const Slider = styled.div`
            height: 300px;
            width: 80%;
            z-index: 2;
            border-radius: 10px;
    `
    const P = styled.p`
        text-align: justify;
        padding: 0 10px;
    `
    const H3 = styled.h3`
        margin: 10px;
        text-align: left;
    `
    const Img = styled.img`
        width: 70px;
        height: 70px;
        border-radius:200px;
    `
    const Imgdiv = styled.div`
        display: inline-flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 50px;
        margin: 20px 0;
    `
    const Image = styled.div`
        display: flex;
        justify-content: center;
        width: 70px;
    `
    const Icon = styled.div`
    &{
        display: inline;
        font-size: 25px;
        padding: 10px;
        cursor: pointer;
        color: #FFA000;
    }
    &:hover{
        color:#FFA000BD ;
    }
    `
    const Header = styled.div`
        width: 30%;
        flex-basis: 30%;
    `

    const Icons = styled.div`
       flex-basis: 40%;
    `
    const H1=styled.h1`
        font-size: 50px;
        text-align: left;
        margin-bottom: 20px;
        font-variant: small-caps;
    `
    const P1 = styled.summary`
        &{  
            width: 100%;
            height: 40px;
            position: absolute;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
        }
        &:hover{
            background-color: #FFA000;
            padding-left: 10px;
            cursor: pointer;
        }
    `
    const Details = styled.details`
            position: relative;
            width: 500px;
            height: 80%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            font-size: 20px;
            text-align: justify;
            margin : 5% 0;
    `
    const P2 = styled.p`
        position: relative;
        top: 20px;
        padding-top: 20px;
        text-align: justify;
    `
    return ( 
        <Div>
            <SecLeft data-aos="fade-right">
                <H1>Testimonials</H1>
                <OwlCarousel options={options} id="review">
                    <Slider>
                        <Imgdiv>
                            <Image>
                                <Img src={img1} alt="" />
                            </Image>
                            <Header>
                                <H3>Jhonny Deep</H3>
                            </Header>
                            <Icons>
                                <Icon>
                                    <FontAwesomeIcon icon={faTwitter}/>
                                </Icon>
                                <Icon>
                                    <FontAwesomeIcon icon={faLinkedin}/>
                                </Icon>
                                <Icon>
                                    <FontAwesomeIcon icon={faInstagram}/>
                                </Icon>
                            </Icons>
                        </Imgdiv>
                        <div>
                            <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Provident reprehenderit delectus, sequi quasi mollitia obcaecati! Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Repudiandae mollitia similique at quisquam ipsum repellendus voluptates cum! Corporis, 
                                magni. Sit exercitationem tenetur ut laboriosam quisquam.</P>
                        </div>
                    </Slider>
                    <Slider>
                        <Imgdiv>
                            <Image>
                                <Img src={img2} alt="" />
                            </Image>
                            <Header>
                                <H3>Silvester swasernecker</H3>
                            </Header>
                            <Icons>
                                <Icon>
                                    <FontAwesomeIcon icon={faTwitter}/>
                                </Icon>
                                <Icon>
                                    <FontAwesomeIcon icon={faLinkedin}/>
                                </Icon>
                                <Icon>
                                    <FontAwesomeIcon icon={faInstagram}/>
                                </Icon>
                            </Icons>
                        </Imgdiv>
                        <div>
                            <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Provident reprehenderit delectus, sequi quasi mollitia obcaecati! Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Repudiandae mollitia similique at quisquam ipsum repellendus voluptates cum! Corporis, 
                                magni. Sit exercitationem tenetur ut laboriosam quisquam.</P>
                        </div>
                    </Slider>
                    <Slider>
                        <Imgdiv>
                            <Image>
                                <Img src={img3} alt="" />
                            </Image>
                            <Header>
                                <H3>Mia Khalifa</H3>
                            </Header>
                            <Icons>
                                <Icon>
                                    <FontAwesomeIcon icon={faTwitter}/>
                                </Icon>
                                <Icon>
                                    <FontAwesomeIcon icon={faLinkedin}/>
                                </Icon>
                                <Icon>
                                    <FontAwesomeIcon icon={faInstagram}/>
                                </Icon>
                            </Icons>
                        </Imgdiv>
                        <div>
                            <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Provident reprehenderit delectus, sequi quasi mollitia obcaecati! Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Repudiandae mollitia similique at quisquam ipsum repellendus voluptates cum! Corporis, 
                                magni. Sit exercitationem tenetur ut laboriosam quisquam.</P>
                        </div>
                    </Slider>
                    <Slider>
                        <Imgdiv>
                            <Image>
                                <Img src={img4} alt="" />
                            </Image>
                            <Header>
                                <H3>Jhonny cens</H3>
                            </Header>
                            <Icons>
                                <Icon>
                                    <FontAwesomeIcon icon={faTwitter}/>
                                </Icon>
                                <Icon>
                                    <FontAwesomeIcon icon={faLinkedin}/>
                                </Icon>
                                <Icon>
                                    <FontAwesomeIcon icon={faInstagram}/>
                                </Icon>
                            </Icons>
                        </Imgdiv>
                        <div>
                            <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Provident reprehenderit delectus, sequi quasi mollitia obcaecati! Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Repudiandae mollitia similique at quisquam ipsum repellendus voluptates cum! Corporis, 
                                magni. Sit exercitationem tenetur ut laboriosam quisquam.</P>
                        </div>
                    </Slider>
                </OwlCarousel>
            </SecLeft>
            <SecRight >
                <H1 data-aos="zoom-in">Frequently Asked <br /> Questions</H1>
                <Details data-aos="fade-left" data-aos-duration="500">
                    <P1>How Book a Trip ?</P1>
                    <P2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, numquam.</P2> 
                </Details>
                <Details data-aos="fade-left" data-aos-duration="1500">
                    <P1>How Book a Trip ?</P1>
                    <P2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, numquam.</P2> 
                </Details>
                <Details data-aos="fade-left" data-aos-duration="2000">
                    <P1>How Book a Trip ?</P1>
                    <P2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, numquam.</P2> 
                </Details>
                <Details data-aos="fade-left" data-aos-duration="2500">
                    <P1>How Book a Trip ?</P1>
                    <P2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, numquam.</P2> 
                </Details>
            </SecRight>
        </Div>
     );
}
 
export default Testimonials;
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
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
        justify-content: space-between;
        align-items: center;

    `
    const Sec = styled.div`
        flex-basis: 50%;
        width: 50%;
        margin-bottom : 5%;
        height: 400px;
    `
    const Slider = styled.div`
            height: 300px;
            width: 100%;
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
        width: 50;
        height: 50px;
        border-radius:100px;
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
        width: 50px;
        flex-basis: 14%;
    `
    const Icon = styled.div`
    &{
        display: inline;
        font-size: 25px;
        padding: 10px;
        cursor: pointer;
        color: #FFA000;
        position: relative;
        top: 25%;
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
    return ( 
        <Div>
            <Sec>
                <h1>Testimonials</h1>
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
            </Sec>
            <Sec>
                <h1>Q & A</h1>
                <p>How Book a Trip ?</p><br />
                <p>How choose Best Destination ?</p>
                <p>How choose Best Destination ?</p>
                <p>How choose Best Destination ?</p>
            </Sec>
        </Div>
     );
}
 
export default Testimonials;
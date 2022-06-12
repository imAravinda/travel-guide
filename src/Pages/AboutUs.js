import AboutUsComponent from "../Component/AboutUs/Aboutus";
import Cover from "../Component/Cover/Cover";
import StroryIntro from "../Component/StoryIntro/StoryIntro";
// import Testimonials from "../Component/userReview&Q&A";

const AboutUs = (props) => {
    return ( 
        <>
            <Cover Cover1text = {props.Covertext}/>
            <StroryIntro/>
            <AboutUsComponent/>
            {/* <Testimonials/> */}
        </>
     );
}
 
export default AboutUs;
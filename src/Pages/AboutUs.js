import AboutUsComponent from "../Component/Aboutus";
import Cover from "../Component/Cover";
import StroryIntro from "../Component/StoryIntro";
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
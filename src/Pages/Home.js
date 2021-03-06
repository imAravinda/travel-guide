import Cover from "../Component/Cover/Cover";
import styled from "styled-components";
import StroryIntro from "../Component/StoryIntro/StoryIntro";
import Specialication from "../Component/Specialication/Specialication";
import Gallery from "../Component/Gallery/Gallery";
import Testimonials from "../Component/UserReviews/userReview&Q&A";
const Home = (props) => {
    const Div = styled.div`
        z-index:1;
        width: 100%;
        margin: 0%;
        padding: 0%;
    `
    return ( 
        <Div>
            <Cover Cover1text = {props.Covertext}/>
            <StroryIntro/>
            <Specialication/>
            <Gallery/>
            <Testimonials/>
        </Div>
        
     );
}
 
export default Home;
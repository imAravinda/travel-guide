import Cover from "../Component/Cover";
import styled from "styled-components";
import StroryIntro from "../Component/StoryIntro";
import Specialication from "../Component/Specialication";
import Destinations from "../Component/Destinations";
import Testimonials from "../Component/userReview&Q&A";
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
            <Destinations/>
            <Testimonials/>
        </Div>
        
     );
}
 
export default Home;
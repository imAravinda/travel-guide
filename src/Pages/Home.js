import Cover from "../Component/Cover";
import styled from "styled-components";
import StroryIntro from "../Component/StoryIntro";
import Specialication from "../Component/Specialication";
import Destinations from "../Component/Destinations";
const Home = () => {
    const Div = styled.div`
        z-index:1;
    `
    return ( 
        <Div>
            <Cover/>
            <StroryIntro/>
            <Specialication/>
            <Destinations/>
        </Div>
        
     );
}
 
export default Home;
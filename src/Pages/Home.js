import Cover from "../Component/Cover";
import styled from "styled-components";
import StroryIntro from "../Component/StoryIntro";
const Home = () => {
    const Div = styled.div`
        z-index:1;
    `
    return ( 
        <Div>
            <Cover/>
            <StroryIntro/>
        </Div>
        
     );
}
 
export default Home;
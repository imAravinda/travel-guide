import Cover from "../Component/Cover";
import styled from "styled-components";
const Home = () => {
    const Div = styled.div`
        z-index:1;
    `
    return ( 
        <Div>
            <Cover/>
        </Div>
        
     );
}
 
export default Home;
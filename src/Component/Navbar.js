import styled from "styled-components";
import img from "./Images/Logo-removebg-preview.png";
const Navbar = () => {
    const Navbar=styled.div`
        display: block;
        margin: 0;
    `
    const Nav=styled.nav`
        display: flex;
        position: absolute;
        justify-content: space-between;
        background:transparent;
        height: 80px;
        width: 100%;
        z-index: 2;
    `
    const Links = styled.div`
        margin: 10px 5px;
        display: flex;
        align-items: center;
    `
    const Ul=styled.ul`
        list-style-type: none;
        display: flex;
        align-items: center;
        
        margin: 0px 20px;
    `
    const Li=styled.li`
    &{
        display: inline-block;
        padding: 0 10px;
        margin: 0 10px;
        font-size: 20px;
        color: white;
        font-family: 'PT Sans', sans-serif;
        cursor: pointer;
        position: relative;
    }
    &:hover .Ho{
        width: 50%;
    }
    `
    const Logo = styled.img`
        width: 150px;
        height: 150px;
        position: absolute;
        padding-top:10px ;
    `
    const Span = styled.span`
    &{
        width: 0%;
        height: 2.5px;
        position: absolute;
        top: 80%;
        margin-top: 5px;
        left: 10%;
        background: #FFA000;
        z-index: -1;
        transition: 0.5s;
    }
    `
    return ( 
        <Navbar>
            <Nav>
                <Links>
                    <Logo src={img} alt="" /> 
                </Links>
                <Links>
                    <Ul>
                        <Li>Home<Span className="Ho"></Span></Li>
                        <Li>Destinations<Span className="Ho"></Span></Li>
                        <Li>Blogs<Span className="Ho"></Span></Li>
                        <Li>About Us<Span className="Ho"></Span></Li>
                        <Li>Contact Us<Span className="Ho"></Span></Li>
                    </Ul>
                </Links>
            </Nav>
        </Navbar>
     );
}
 
export default Navbar;
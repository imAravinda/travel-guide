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
        justify-content: center;
        margin: 0px 20px;
    `
    const Li=styled.li`
        display: inline-block;
        padding: 0 10px;
        font-size: 20px;
        color: white;
        font-family: 'PT Sans', sans-serif;;
    `
    const Logo = styled.img`
        width: 150px;
        height: 150px;
        position: absolute;
        padding-top:10px ;
    `
    return ( 
        <Navbar>
            <Nav>
                <Links>
                    <Logo src={img} alt="" /> 
                </Links>
                <Links>
                    <Ul>
                        <Li>Home <span></span></Li>
                        <Li>Destinations<span></span></Li>
                        <Li>Blogs<span></span></Li>
                        <Li>About Us<span></span></Li>
                        <Li>Contact Us<span></span></Li>
                    </Ul>
                </Links>
            </Nav>
        </Navbar>
     );
}
 
export default Navbar;
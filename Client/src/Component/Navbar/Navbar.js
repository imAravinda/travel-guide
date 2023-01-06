import styled from "styled-components";
import img from "../Images/Logo-removebg-preview.png";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = (props) => {
    const Navbar=styled.div`
        display: block;
        margin: 0;
    `
    const Nav=styled.nav`
        display: flex;
        position: fixed;
        justify-content: space-between;
        background:transparent;
        height: 100px;
        width: 100%;
        z-index: 9999;
    `
    const NavActive = styled.div`
        display: flex;
        position: fixed;
        justify-content: space-between;
        background:#212121;
        color:  #FFF8E1;
        height: 100px;
        width: 100%;
        z-index: 9999;
        transition: all 0.5s ease;
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
    `
    const Span = styled.span`
    &{
        width: 0%;
        height: 2.5px;
        position: absolute;
        top: 80%;
        margin-top: 5px;
        display: flex;
        justify-content: center;
        background: #FFA000;
        z-index: -1;
        transition: 0.5s;
    }
    `
    
    const ScrollToTop = ()=>{
        if(window.pageYOffset > 200){
            window.scrollTo({
                top:0,
                behavior: "smooth"
            })
        }
    }
    const [navbar,setNavbar] = useState(false);

    const changeBackground = ()=>{
        if(window.scrollY >= 100){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    }

    window.addEventListener('scroll',changeBackground);
    
    return ( 
        <Navbar>
            {
                navbar ? 
                <NavActive data-aos={"fade-down"}>
                    <Links>
                        <Logo src={img} alt="" /> 
                    </Links>
                    <Links>
                        <Ul>
                            <Li className="li" onClick={ScrollToTop}><Link to="./">Home<Span className="Ho"></Span></Link></Li>
                            <Li className="li" onClick={ScrollToTop}><Link to="./destination">Destinations<Span className="Ho"></Span></Link></Li>
                            <Li className="li" onClick={ScrollToTop}><Link to="./blogs">Blogs<Span className="Ho"></Span></Link></Li>
                            <Li className="li" onClick={ScrollToTop}><Link to="./aboutUs">About Us<Span className="Ho"></Span></Link></Li>
                            {/* <Li className="li" onClick={ScrollToTop}><Link to=" ">Contact Us<Span className="Ho"></Span></Link></Li> */}
                        </Ul>
                    </Links>
                </NavActive>
                :
                <Nav>
                    <Links>
                        <Logo src={img} alt="" /> 
                    </Links>
                    <Links>
                        <Ul>
                            <Li className="li" onClick={ScrollToTop}><Link to="/">Home<Span className="Ho"></Span></Link></Li>
                            <Li className="li" onClick={ScrollToTop}><Link to="./destination">Destinations<Span className="Ho"></Span></Link></Li>
                            <Li className="li" onClick={ScrollToTop}><Link to="./blogs">Blogs<Span className="Ho"></Span></Link></Li>
                            <Li className="li" onClick={ScrollToTop}><Link to="./aboutUs">About Us<Span className="Ho"></Span></Link></Li>
                            {/* <Li className="li" onClick={ScrollToTop}><Link to=" ">Contact Us<Span className="Ho"></Span></Link></Li> */}
                        </Ul>
                    </Links>
                </Nav>
            }
        </Navbar>
     );
}
 
export default Navbar;
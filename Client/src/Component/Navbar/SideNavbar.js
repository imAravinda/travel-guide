import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../Images/Logo-removebg-preview.png";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const SideNavBar = (props) => {
const NavBar=styled.div`
        margin: 0; 
        font-family: "Lato", sans-serif;
    `
const Nav=styled.nav`
        width: 100%;
        height: 70%;
        left: 0;
        position: fixed;
        /* background: #339BFF; */
        background:linear-gradient(to bottom right, #212121 10%,#FFA000 100%);
        transition: 0.5s;
        z-index: 2000000000;
        /* width: 200px;
        height: 100vh;
        position: fixed;
        right: -250px;
        top: 0;
        transition: 0.5s;
        z-index: 2; */
        display: flex;
        justify-content:left;
    `
const Links = styled.div`
        ${'' /* margin: 0px 5px; */}
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        font-family: "Lato", sans-serif;
    `
const Ul=styled.ul`
        /* list-style-type: none;
        text-align: right;
        width: 250px;
        height: 100vh;
        border-radius: 5px;
        background:#339BFF;
        text-align: center;
        position: fixed;
        right: 0px;
        top: 50px;
        cursor: pointer;
        z-index: 3; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 3rem 0;
        font-family: "Lato", sans-serif;
        font-weight: 100;
        position: absolute;
        top: 40%;
    `
// export const LinksH1=styled.h1`
//         margin-left:100px;
//         color:#FFF;
//         text-align:left;
//         letter-spacing:2px;
//         z-index: 2;
//     `
const Li=styled.li`
    &{
        list-style: none;
        margin: 10px 10px;
        text-align: left;
        font-family: "Lato", sans-serif;
        letter-spacing: 0.1rem;
        font-weight: 300;
    }
    &:hover .Ho{
        width: 100%;
    }
    `
const Logo = styled.img`
        width: 110px;
        height: 110px;
        position: absolute;
        top: 0%;
        margin-bottom: 5%;
        ${'' /* margin-left:3rem; */}
        z-index: 20000000000;
    `
const Span = styled.span`
        width: 0%;
        height: 2px;
        top: 100%;
        margin-top: 10px;
        display: flex;
        justify-content: center;
        ${'' /* background: #FFF; */}
        background: #FFF;
        z-index: -1;
        transition: 0.5s;
    `
const Menu = styled.img`
        font-size: 20px;
        margin-top: 25%;
    `
const Menubtn = styled.div`
        border-radius: 5px;
        background-color: #FFA000;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: right;
        position: fixed;
        right:8%;
        top: 3%;
        font-size: 30px;
        color: #fff;
        cursor: pointer;
        z-index: 300000000000;
    `
    const [visiblity,setVisible] = useState(false);
    const Visible = ()=>{
        setVisible(true);
    }
    const Invisible = () =>{
        setVisible(false);
    }
    const ScrollToTop = ()=>{
        if(window.pageYOffset > 200){
            window.scrollTo({
                top:0,
                behavior: "smooth"
            })
        }
    }
    return ( 
        <NavBar>
                <Links>
                    <Logo src={img} alt="" />
                </Links>
                { visiblity ?
                    <Nav
                        initial="hidden"
                        animate="visible"
                        exit={{
                            y: '-100vh',
                            opacity: 0
                        }}
                    >
                        <Ul>
                            <Li className="li" onClick={() => { ScrollToTop(); Invisible(); }}><Link to="/">  Home<Span className="Ho"></Span></Link></Li>
                            {/* <Li className="li" onClick={() => { scrollToTop(); Invisible(); }}><Link to="/under-construction">  Facilities<Span className="Ho"></Span></Link></Li> */}
                            <Li className="li" onClick={() => { ScrollToTop(); Invisible(); }}><Link to="./destination">Destination<Span className="Ho"></Span></Link></Li>
                            {/* <Li className="li" onClick={() => { scrollToTop(); Invisible(); }}><Link to="/under-construction">Maintenance<Span className="Ho"></Span></Link></Li> */}
                            <Li className="li" onClick={() => { ScrollToTop(); Invisible() }}><Link to="./blogs">Blogs<Span className="Ho"></Span></Link></Li>
                            <Li className="li" onClick={() => { ScrollToTop(); Invisible() }}><Link to="/aboutUs">About Us<Span className="Ho"></Span></Link></Li>
                        </Ul>
                    </Nav>
                    : false
                }
                <Menubtn onClick={visiblity ? Invisible : Visible}>
                    {
                        visiblity ? 
                            <FontAwesomeIcon icon={faTimes}/>
                            :
                            <FontAwesomeIcon icon={faBars}/> 
                    }
                </Menubtn>
            </NavBar>
     );
}
 
export default SideNavBar;
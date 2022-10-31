
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Pages/Home';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Footer from './Component/Footer/footer';
import ScrollToTop from './Hooks/ScrollToTop';
import content from './Data/Content';
import Destination from './Pages/Destination';
import Blog from './Pages/Blog';
import AboutUs from './Pages/AboutUs';
import Aos from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { BeatLoader } from 'react-spinners';
import Login from './Component/Login/Login';
import SideNavBar from './Component/Navbar/SideNavbar';
function App() {
  const GlobalStyle = createGlobalStyle `
    body{
      font-family: 'PT Sans', sans-serif;
    }
  `
 
  useEffect(() => {
    Aos.init({duration:500}); 
  }, [])
  // console.log(content);
  const[view,setView] = useState(window.innerWidth >= 800 ? true : false);
  useEffect(()=>{
    const resize = ()=>{
      if(window.innerWidth >= 800){
          setView(true);
      }else{
          setView(false);
      }
    }
    window.addEventListener('resize',resize);
  })
    
  return (
    <div className='App'>
        <Router>
                  <div className="App">
                  <GlobalStyle/>
                  <ScrollToTop/> 
                      <Switch>
                        <Route exact path="/Login">
                            <div>
                              <Login/>
                            </div>
                          </Route>
                          <div>
                            {
                              view ? <Navbar/> : <SideNavBar top={ScrollToTop}/>
                            }
                          <Route exact path="/">
                            <div>
                              <Home Covertext={content[0]} view1={view}/>
                            </div>
                          </Route>
                          
                          <Route exact path="/destination">
                            <div>
                              <Destination Covertext={content[1]}/>
                            </div>
                          </Route>
                          <Route exact path="/blogs">
                            <div>
                              <Blog Covertext={content[2]}/>
                            </div>
                          </Route>
                          <Route exact path="/aboutUs">
                            <div>
                              <AboutUs Covertext={content[3]}/>
                            </div>
                          </Route>
                          <Footer/>
                        </div>
                      </Switch>
                  </div>
                </Router>
    </div>
  );
}

export default App;


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
import { useEffect } from "react";
import "aos/dist/aos.css";
function App() {
  const GlobalStyle = createGlobalStyle `
    body{
      font-family: 'PT Sans', sans-serif;
    }
  `
  useEffect(() => {
    Aos.init({duration:1000}); 
  }, [])
  // console.log(content);
  return (
    <Router>
      <div className="App">
      <GlobalStyle/>
      <Navbar/>
      <ScrollToTop/> 
          <Switch>
            <Route exact path="/">
              <div>
                <Home Covertext={content[0]}/>
              </div>
            </Route>
            <Route exact path="/destination">
              <div>
                <Destination Covertext={content[1]}/>
              </div>
            </Route>
            <Route exact path="/blog">
              <div>
                <Blog Covertext={content[2]}/>
              </div>
            </Route>
            <Route>
              <div>
                <AboutUs Covertext={content[3]}/>
              </div>
            </Route>
          </Switch>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;

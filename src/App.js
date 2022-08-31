
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
function App() {
  const GlobalStyle = createGlobalStyle `
    body{
      font-family: 'PT Sans', sans-serif;
    }
  `
  const[loading,setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    },2000);
  },[]);
  useEffect(() => {
    Aos.init({duration:500}); 
  }, [])
  // console.log(content);
  return (
    <div className='App'>
        {
          loading ?
          <BeatLoader loading={loading} color={'#FFA000'} className="spinner"/>
                  :
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
         }
    </div>
  );
}

export default App;


import './App.css';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Footer from './Component/footer';
import ScrollToTop from './Hooks/ScrollToTop';
import content from './Data/Content';
import Destination from './Pages/Destination';
function App() {
  const GlobalStyle = createGlobalStyle `
    body{
      font-family: 'PT Sans', sans-serif;
    }
  `
  console.log(content);
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
          </Switch>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;

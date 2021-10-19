
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Footer from './Component/footer';
import ScrollToTop from './Component/ScrollToTop';
function App() {
  const GlobalStyle = createGlobalStyle `
    body{
      font-family: 'PT Sans', sans-serif;
    }
  `
  return (
    <Router>
      <div className="App">
      <GlobalStyle/>
      <Navbar/>
      <ScrollToTop/> 
          <Switch>
            <Route exact path="/">
              <div>
                <Home/>
              </div>
            </Route>
          </Switch>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;

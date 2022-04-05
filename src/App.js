import React, { Component } from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import CheckList from './components/checklist';
import './App.css';
 
class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
            <Navbar bg="primary" variant="dark">
            <ul className="App-header">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
            </Navbar>
            
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
 
export default App;
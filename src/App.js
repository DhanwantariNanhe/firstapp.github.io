//import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar1 from './components/Navbar1';
import Home from './components/Home';
import Services from './components/Services';
import Login from './components/Login';
import MyCarousel from './components/MyCarousel';
import FrontEnd from './components/FrontEnd';
import BackEnd from './components/BackEnd';
import FullStack from './components/FullStack';
import Movies from './components/Movies';
import Hooks from './components/Hooks';
import Api from './components/Api';





function App() {

  return(

    <>
       <Router>
         
           <Navbar1/>
           
           <Routes>

                 <Route path='/home' element= {<Home/>}/>
                 <Route path='/login' element= {<Login/>}/>
                 <Route path='/services' element= {<Services/>}/>
                 <Route path='/movies' element= {<Movies/>}/>
                  <Route path='/hooks' element= {<Hooks/>}/>
                  <Route path='/api' element= {<Api/>}/>

                     <Route path= '/services/frontend' element= {<FrontEnd/>}/>
                     <Route path= '/services/backend' element= {<BackEnd/>}/>
                     <Route path= '/services/fullstack' element= {<FullStack/>}/>
                  

           </Routes>

        </Router> 
      
      
    </>

  );

  }

  
export default App;
  





    /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */

   
 



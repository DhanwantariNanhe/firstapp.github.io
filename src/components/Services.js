
import React from "react";
import { NavLink } from 'react-router-dom';

const Services = () => {

     return(

        <>
          <li className="nav-link me-auto my-2 my-lg-0">
                <NavLink  to= {'/services/frontend'}>FrontEnd</NavLink>
                <NavLink  to= {'/services/backend'}>BackEnd</NavLink>
                <NavLink  to= {'/services/fullstack'}>FullStack</NavLink>
          </li>
          
          
        </>
     );


}

export default Services;
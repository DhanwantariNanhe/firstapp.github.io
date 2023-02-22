import React from "react";
import Home from "./Home";

const Login = () =>{

   const userid = window.prompt("Enter User ID");
   const password = parseInt(window.prompt("Enter Password"));

   if(userid === "Divya" && password=== "123")
   {

    return(
      <>
        <Home/>
      </>
    );

   }

   else{

    return(

      <>
        <Login/>
      </>
    );

   }

    
    



}

export default Login;
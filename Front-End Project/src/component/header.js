import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

// class Header extends Component {
const Header1 = (props) => {
    const history = useHistory();
    
        const[signInAthlete, setSignInAthlete] = useState({email:'', password:''});
    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempSignIn = {...signInAthlete};
        tempSignIn[name] = value;
        setSignInAthlete(tempSignIn);
}

const loginAthlete = (event) => {
    axios.post(
           'http://localhost:8080/login', signInAthlete)
       .then(response => {
           localStorage.setItem('loggedInAthlete',response.data.email);
       history.push('/profile');
       // console.log(response);
   })
   .catch(error => {
       console.log("replace this with navigation to error page")
   });
   }
   const logout = () => {
    localStorage.clear();
    history.push('/home');
}

   const toggleDisplay = () => {
    if(localStorage.getItem('loggedInAthlete')){
        return(
            <nav classname="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div classname="container">
         <div className="collapse navbar-collapse" id="navbarCollapse">
            <form className="d-flex">
              <button onClick={logout} className="btn btn-outline-success" type="button">Log Out</button>
            </form>
            <a classname="navbar-brand" href="#page-top">
        <img src="./assests/assets/img/navbar-logo.svg" alt="..." />
        </a>
    <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      Menu
      <i classname="fas fa-bars ms-1" />
    </button>
    <ul classname="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
        <li classname="nav-item"><a classname="nav-link" href="/sign-up">Sign Up</a></li>
        {/* <li classname="nav-item"><a classname="nav-link" href="/login">Login</a></li> */}
        <li classname="nav-item"><a classname="nav-link" href="#about">About</a></li>
        <li classname="nav-item"><a classname="nav-link" href="#team">Team</a></li>
        <li classname="nav-item"><a classname="nav-link" href="#contact">Contact</a></li>
      </ul>
          </div>
          </div>
          </nav>
        )
    }

    else{ return(
        <nav classname="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div classname="container">
         <div className="collapse navbar-collapse" id="navbarCollapse">
            {/* <Route exact path="/" component={SignUp}/> */}
         {/* <ul className="navbar-nav me-auto mb-2 mb-md-0"> */}
           {/* <li className="nav-item">
             <Link className="nav-link active" aria-current="page" to="/">Home</Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link" to="/potatoes">About Us</Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</Link>
           </li> */}
          {/* </ul> */}
          
         <form className="d-flex">
           <input onChange={changeHandler} name="email" value={signInAthlete.email} className="form-control me-2" type="text/babel" placeholder="Email" aria-label="Email" />
           <input onChange={changeHandler} name="password" value={signInAthlete.password} className="form-control me-2" type="password" placeholder="Password" aria-label="Password" />
           <button onClick={loginAthlete} className="btn btn-outline-success" type="button">Login</button>
         </form>
         <a classname="navbar-brand" href="#page-top">
        <img src="./assests/assets/img/navbar-logo.svg" alt="..." />
        </a>
    <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      Menu
      <i classname="fas fa-bars ms-1" />
    </button>
    <ul classname="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
        <li classname="nav-item"><a classname="nav-link" href="/sign-up">Sign Up</a></li>
        {/* <li classname="nav-item"><a classname="nav-link" href="/login">Login</a></li> */}
        <li classname="nav-item"><a classname="nav-link" href="#about">About</a></li>
        <li classname="nav-item"><a classname="nav-link" href="#team">Team</a></li>
        <li classname="nav-item"><a classname="nav-link" href="#contact">Contact</a></li>
      </ul>
       </div>
       </div>
       </nav>
       

     )
    }
}
    return(<div>
        <nav classname="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
  <div classname="container">
    {toggleDisplay()}
    <div classname="collapse navbar-collapse" id="navbarResponsive">
     
    </div>
  </div>
</nav>
</div>

    )
};
export default Header1;
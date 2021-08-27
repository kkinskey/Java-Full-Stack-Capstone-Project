// On step #30.


import { useState } from "react";
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
// import SignUp from '../sign-up/SignUp';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Header2 = (props) => {
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
        localStorage.setItem("loggedInAthlete",response.data.email);
    history.push('/profile/workouts');
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
            <div 
            className="collapse navbar-collapse" 
            id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
                <Link className="nav-link active" to="/profile" tabindex="-1" aria-disabled="true">Home</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/profile1">Profile</Link>
              </li> */}
              {/* <li className="nav-item">
                <Link className="nav-link" to="/potatoes">About Us</Link>
              </li> */}
            </ul>
            <form className="d-flex">
                    {/* <img  width={60} height={60} className="rounded-circle" /> */}

              <button onClick={logout} className="btn btn-outline-success" type="button">Sign Out</button>
            </form>
          </div>

        )
    }

    else{ return(
                    
        <div className="collapse navbar-collapse" id="navbarCollapse">
         <ul className="navbar-nav me-auto mb-2 mb-md-0">
           <li className="nav-item">
             <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
           </li>
           {/* <li className="nav-item">
             <Link className="nav-link" to="/potatoes">About Us</Link>
           </li> */}
           {/* <li className="nav-item">
             <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
           </li> */}
         </ul>
         <form className="d-flex">
           <input onChange={changeHandler} name="email" value={signInAthlete.email} className="form-control me-2" type="text/babel" placeholder="Email" aria-label="Email" />
           <input onChange={changeHandler} name="password" value={signInAthlete.password} className="form-control me-2" type="password" placeholder="Password" aria-label="Password" />
           <button onClick={loginAthlete} className="btn btn-outline-success" type="button">Sign In</button>
         </form>
       </div>
       

     )
    }

}


return(
    <div className="mb-5">

<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark" id="navbarResponsive">
 <div className="container-fluid">
   <Link className="nav-link" to="/sign-up">Sign Up</Link>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>
    {toggleDisplay()}
    </div>
    </nav>
            {/* <div>
            <header class="masthead">
            <div class="container">
                <div class="masthead-subheading">Welcome To Gains Tracker!</div>
                <div class="masthead-heading text-uppercase">It's Nice To Meet You</div>
                <a class="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</a>
            </div>
        </header>
            </div> */}
    </div>
    );

  }

  export default Header2;
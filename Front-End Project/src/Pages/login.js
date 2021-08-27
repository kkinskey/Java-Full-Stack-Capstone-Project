import axios from 'axios';
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
const Login = (props) => {
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
       history.push('/');
       // console.log(response);
   })
   .catch(error => {
       console.log("replace this with navigation to error page")
   });
   }
   
   const [loggedInAthlete, setLoggedInAthlete] = useState({});
   useEffect(() => {
     const params = {
       email: localStorage.getItem("loggedInAthlete"),
     };
     axios
       .get("http://localhost:8080/findAthleteByEmail", { params })
       .then((response) => {
         setLoggedInAthlete(response.data);
       })
       .catch((error) => {});
   }, []);

return(
<form className="d-flex">
           <input onChange={changeHandler} name="email" value={signInAthlete.email} className="form-control me-2" type="text/babel" placeholder="Email" aria-label="Email" />
           <input onChange={changeHandler} name="password" value={signInAthlete.password} className="form-control me-2" type="password" placeholder="Password" aria-label="Password" />
           <button onClick={loginAthlete} className="btn btn-outline-success" type="button">Login</button>
         </form>
    );

  }

  export default Login;

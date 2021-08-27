// import { render } from "@testing-library/react";
import axios from 'axios';
import { useState } from "react";
import { useHistory } from "react-router-dom";

const SignUp = (props) => {

    const[athlete, setAthlete] = useState(
        {firstName:'', 
        lastName:'', 
        email:'', 
        password:'',
        age:'',
        height:'',
        weight: ''
        }
    );

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempAthlete = {...athlete};
        console.log(name)
        console.log(value)
        tempAthlete[name]= value;
        setAthlete(tempAthlete);
        console.log(athlete)
    }

    const history = useHistory();

    const submitAthlete = () => {
        console.log(athlete)
        axios.post(
            "http://localhost:8080/saveAthlete", athlete
        ).then(
            history.push('/thank-you'))
        }

        return (
          <div className="bg-body">
          <section className="page-section" 
          id="services"
          >
            <div class="container">
              <div class="text-center">
                <h2 className="section-heading text-uppercase">Sign Up</h2>
                <h3 class="section-subheading text-muted">
                  Start you Fitness Journey Today!
                </h3>
              </div>
              <div className="row text-center">
                <div>
                  <div className="container px-5 my-5">
                    <form
                      id="contactForm"
                      // data-sb-form-api-token="API_TOKEN"
                    >
                      {/* <div className="form-floating mb-3">
        <input onchange={changeHandler} className="form-control" name="firstName" value={athlete.firstName} id="firstName" type="text" placeholder="First Name" data-sb-validations="required" />
        <label htmlfor="firstName">First Name</label>
        {/* <div className="invalid-feedback" data-sb-feedback="firstName:required">First Name is required.</div> */}

                      {/* </div> */}
                      <div className="form-floating mb-3">
                        <input
                          onChange={changeHandler}
                          className="form-control"
                          name="firstName"
                          value={athlete.firstName}
                          id="firstName"
                          type="text"
                          placeholder="First Name"
                          data-sb-validations="required"
                        />
                        <label htmlfor="firstName">First Name</label>
                        {/* <div className="invalid-feedback" data-sb-feedback="lastName:required">Last Name is required.</div> */}
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          onChange={changeHandler}
                          className="form-control"
                          name="lastName"
                          value={athlete.lastName}
                          id="lastName"
                          type="text"
                          placeholder="Last Name"
                          data-sb-validations="required"
                        />
                        <label htmlfor="lastName">Last Name</label>
                        {/* <div className="invalid-feedback" data-sb-feedback="lastName:required">Last Name is required.</div> */}
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          onChange={changeHandler}
                          className="form-control"
                          name="age"
                          value={athlete.age}
                          id="age"
                          type="text"
                          placeholder="Age"
                          data-sb-validations="required"
                        />
                        <label htmlfor="age">Age</label>
                        {/* <div className="invalid-feedback" data-sb-feedback="age:required">Age is required.</div> */}
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          onChange={changeHandler}
                          className="form-control"
                          name="height"
                          value={athlete.height}
                          id="height"
                          type="text"
                          placeholder="Height"
                          data-sb-validations="required"
                        />
                        <label htmlfor="height">Height</label>
                        {/* <div className="invalid-feedback" data-sb-feedback="height:required">Height is required.</div> */}
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          onChange={changeHandler}
                          className="form-control"
                          name="weight"
                          value={athlete.weight}
                          id="weight"
                          type="text"
                          placeholder="Weight"
                          data-sb-validations="required"
                        />
                        <label htmlfor="weight">Weight</label>
                        {/* <div className="invalid-feedback" data-sb-feedback="weight:required">Weight is required.</div> */}
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          onChange={changeHandler}
                          className="form-control"
                          name="email"
                          value={athlete.email}
                          id="emailAddress"
                          type="email"
                          placeholder="Email Address"
                          data-sb-validations="email,required"
                        />
                        <label htmlfor="emailAddress">Email Address</label>
                        {/* <div className="invalid-feedback" data-sb-feedback="emailAddress:required">Email Address is required.</div>
        <div className="invalid-feedback" data-sb-feedback="emailAddress:email">Email Address Email is not valid.</div> */}
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          onChange={changeHandler}
                          className="form-control"
                          name="password"
                          value={athlete.password}
                          id="password"
                          type="password"
                          placeholder="Password"
                          data-sb-validations="required"
                        />
                        <label htmlfor="password">Password</label>
                        {/* <div className="invalid-feedback" data-sb-feedback="password:required">Password is required.</div> */}
                      </div>
                      {/* <div class="col-md-6">

                        <label for="img" class="form-label">Select Image</label>
                        <input path="picture" type="file" accept="image/*"/>
                      </div> */}

                      <div className="d-grid">
                        <button
                          className="button-signup"
                          onClick={submitAthlete}
                          //   className=" btn-lg disabled"
                          id="submitButton"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">E-Commerce</h4>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Responsive Design</h4>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Web Security</h4>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div> */}
                </div>
              </div>
            </div>
            
            </section>
            </div>
        );
        

};
export default SignUp;
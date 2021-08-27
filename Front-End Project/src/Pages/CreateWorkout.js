// import { render } from "@testing-library/react";
import axios from 'axios';
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const CreateWorkout = (props) => {
  const [loggedInAthlete, setLoggedInAthlete] = useState({});
  useEffect(() => {
    const params = {
      email: localStorage.getItem("loggedInAthlete"),
    };
    axios
      .get("http://localhost:8080/findAthleteByEmail", { params })
      .then((response) => {
        setLoggedInAthlete(response.data);
        console.log(response.data);
      })
      .catch((error) => {});
  }, []);

    const[workout, setWorkout] = useState(
        {
        exercise:'', 
        sets:'', 
        reps:'',
        
        }
    );

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempWorkout = {...workout};
        console.log(name)
        console.log(value)
        tempWorkout[name]= value;
        setWorkout(tempWorkout);
        console.log(workout)
    }

    const history = useHistory();

    const submitWorkout = () => {
      const params = {
        email: localStorage.getItem("loggedInAthlete"),
      };
        console.log(workout)
        axios.post(
            "http://localhost:8080/saveWorkout", workout, { params }
        ).then(
            history.push('/workoutcreated'))
        }

        return ( 
        <div className="bg-body">
          <section className="page-section" id="services">
                      <div className="container">
                         <div className="text-center">
                           <h2 className="section-heading text-uppercase">Create Workout</h2>
                           <h3 className="section-subheading text-muted">
                               Train your Way!
                           </h3>
                         </div>
                            <div className="row text-center">
                              <div className="container px-5 my-5">
                                <form
                                   id="contactForm"

                                            // data-sb-form-api-token="API_TOKEN"
                                          >
                                            {/* <div classNamename="form-floating mb-3">
                              <input onchange={changeHandler} classNamename="form-control" name="firstName" value={athlete.firstName} id="firstName" type="text" placeholder="First Name" data-sb-validations="required" />
                              <label htmlfor="firstName">First Name</label>
                              {/* <div classNamename="invalid-feedback" data-sb-feedback="firstName:required">First Name is required.</div> */}

                                            {/* </div> */}
                      <div className="form-floating mb-3">
                        <input
                          onChange={changeHandler}
                          className="form-control"
                          name="exercise"
                          value={workout.exercise}
                          id="exercise"
                          type="text"
                          placeholder="Exercise Name"
                          data-sb-validations="required"
                        />
                        <label htmlfor="firstName">Exercise Name</label>
                        {/* <div className="invalid-feedback" data-sb-feedback="lastName:required">Last Name is required.</div> */}
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          onChange={changeHandler}
                          className="form-control"
                          name="sets"
                          value={workout.sets}
                          id="sets"
                          type="text"
                          placeholder="Number of Sets"
                          data-sb-validations="required"
                        />
                        <label htmlfor="lastName">Sets</label>
                        {/* <div className="invalid-feedback" data-sb-feedback="lastName:required">Last Name is required.</div> */}
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          onChange={changeHandler}
                          className="form-control"
                          name="reps"
                          value={workout.reps}
                          id="reps"
                          type="text"
                          placeholder="reps"
                          data-sb-validations="required"
                        />
                        <label htmlfor="age">Reps</label>
                        {/* <div className="invalid-feedback" data-sb-feedback="age:required">Age is required.</div> */}
                      </div>
                      

                                                          {/* <div className="d-none" id="submitSuccessMessage">
                                          <div className="text-center mb-3">
                                            <div className="fw-bolder">Form submission successful!</div>
                                            <p>To activate this form, sign up at</p>
                                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                          </div>
                                        </div> */}
                                                          {/* <div className="d-none" id="submitErrorMessage">
                                          <div className="text-center text-danger mb-3">Error sending message!</div>
                                        </div> */}
                      <div className="d-grid">
                        <button
                          className="button-signup"
                          onClick={submitWorkout}
                          //   className="btn btn-primary btn-lg disabled"
                          id="submitButton"
                          type="submit"
                        >
                          Save Workout
                        </button>
                      </div>
                    </form>
                  

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
export default CreateWorkout;
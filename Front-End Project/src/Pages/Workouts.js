import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";


const Workouts = (props) => {


    // const photos = [];
    // // "https://api.unsplash.com/photos/random?client_id=9M-E_djw1H6uXHJLR8T16fFwSzAhX-u-6OcpVqCyFZ0"

    // async function getphotos(){// if(props.allWorkouts.length) {
    //     for(let i = 0; i < props.allWorkouts.length; i++) {
    //      const resp =  await axios.get(`https://source.unsplash.com/400x500/?exercise,${props.allWorkouts[0].exercise}`)
    //             console.log(i);
    //             photos.push(resp)
    //     }
    // }


    // console.log(photos);





const email = localStorage.getItem("loggedInAthlete")
    console.log(props);
    const{setEditWorkout, editWorkout, updateWorkout, editchangeHandler} = props
const history = useHistory()
    const deleteWorkout = (item) => {
        console.log(item)
        
        const params = {"id": item.id}
        axios.delete(
            "http://localhost:8080/deleteWorkout", {params}
        )
        .then(
            history.push('/workoutdeleted'))
        }

   
    const [clicked, setClicked] = useState(false);

    const clickedChanger=(index)=>{

        // setP(inventory[index])
        setEditWorkout(props.allWorkouts[index])
        console.log(props.allWorkouts[index])
        setClicked(!clicked)
     
      }

    function changeWorkout() {
    if(clicked) {
        return(

            <form
                    //   id="contactForm"
                >
                      <div className="form-floating mb-3">
                        <input
                          onChange={editchangeHandler}
                          className="form-control"
                          name="exercise"
                          value={editWorkout.exercise}
                          id="exercise"
                          type="text"
                          placeholder="Exercise Name"
                          data-sb-validations="required"
                        />
                        <label htmlfor="firstName">Exercise Name</label>
                        
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          onChange={editchangeHandler}
                          className="form-control"
                          name="sets"
                          value={editWorkout.sets}
                          id="sets"
                          type="text"
                          placeholder="Number of Sets"
                          data-sb-validations="required"
                        />
                        <label htmlfor="lastName">Sets</label>
                        
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          onChange={editchangeHandler}
                          className="form-control"
                          name="reps"
                          value={editWorkout.reps}
                          id="reps"
                          type="text"
                          placeholder="reps"
                          data-sb-validations="required"
                        />
                        <label htmlfor="age">Reps</label>
                        
                      </div>
                      
                      <div className="d-grid">
                        <button
                          onClick={updateWorkout}
                        //   id="submitButton"
                          type="submit"
                        >
                          Save Workout
                        </button>
                      </div>
                    </form>

        )
    } 
}
  useEffect(()=>{ 
    // getphotos()
    changeWorkout()
  },[])
    return (
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {props.allWorkouts.map((item, index) =>{
            // let add = `https://source.unsplash.com/400x500/?exercise,${item.exercise}`
            
            // console.log(add)
            return(
          <div className="col">
               
            <div className="card shadow-sm">
              <svg
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                  <div className="d-flex justify-content-between align-items-center"></div>
                <title>Placeholder</title>
                {/* <rect width="100%" height="100%" fill="#55595c"></rect> */}
                {/* <img src='https://api.unsplash.com/photos/random?client_id=9M-E_djw1H6uXHJLR8T16fFwSzAhX-u-6OcpVqCyFZ0'/> */}
                <text x="75%" y="75%" fill="#eceeef" dy=".3em">
                {item.exercise}
                </text>
              </svg>
              <div className="card-body">
                <p className="card-text">Exercise: {item.exercise}</p>
                <p className="card-text">Sets: {item.sets}</p>
                <p className="card-text">Reps: {item.reps}</p>
                {/* <p className="card-text">Email (Foreign Key): {item.athlete}</p> */}
                <div className="btn-group">
                  {/* <div className="d-grid"> */}
                        
                        <button
                        className="btn btn-tertiary"
                        
                          onClick={() => {clickedChanger(index)}}
                          //   className="btn btn-primary btn-lg disabled"
                          id="submitButton"
                          type="submit"
                        >
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>
              </button>

                        <button className="btn btn-secondary" id="submitButton" type="submit" onClick={() => {deleteWorkout(item)}}>
                         <svg xmlns="http://www.w3.org/2000/svg" width="100" height="20" 
                         fill="currentColor" 
                         class="bi bi-trash-fil" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg>
  {/* <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg> */}
                          {/* Delete Workout */}
                        </button>
               
                  
            
                      </div>
                    {/* <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Facebook
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      LinkedIn
                    </button> */}
                  </div>
                </div>
              </div>
            
        //   </div>
          
          )
          }  )
        }
        {changeWorkout()}
      </div>
    );
  };
  export default Workouts;
  
import axios from "axios";
import { useHistory } from "react-router-dom";


const Info = (props) => {
    console.log(props);
    const {loggedInAthlete} = props
  
    return (
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        
          <div className="col">
            <div className="card shadow-sm">
              <svg
                
                width="100%"
                height="225"
                // xmlns="http://www.w3.org/2000/svg"
                // role="img"
                // aria-label="Placeholder: Thumbnail"
                // preserveAspectRatio="xMidYMid slice"
                // focusable="false"
              xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>

                {/* <title>Placeholder</title> */}
                {/* <rect  fill="#55595c"></rect> */}
                {/* <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text> */}
              </svg>
              <div className="card-body">
                <p className="card-text">Email: {loggedInAthlete.email}</p>
                <p className="card-text">First Name: {loggedInAthlete.firstName}</p>
                <p className="card-text">Last Name: {loggedInAthlete.lastName}</p>
                <p className="card-text">Age: {loggedInAthlete.age}</p>
                <p className="card-text">Height: {loggedInAthlete.height}</p>
                <p className="card-text">Weight: {loggedInAthlete.weight}</p>

                {/* <p className="card-text">Email (Foreign Key): {item.athlete}</p> */}
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                  <div className="d-grid">
            
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
            </div>
          </div>
      </div>
    );
  };
  export default Info;
  
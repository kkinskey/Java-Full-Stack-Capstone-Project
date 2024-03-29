import { useState } from "react";
import { Link } from "react-router-dom";
const workoutDeleted = (props) => {
  
    return (
        <div className="home-container">
        <div className="w3-content" style={{ 'max-width': '1200px' }}>

           <div className="w3-panel">
               <i className="w3-xlarge fa fa-bars"></i>
           </div>
           {/* First Grid: Logo & About   */}
           <div className="w3-row">
               <div className="w3-half w3-container">
                   <h1 className="w3-xxlarge w3-text-light-grey">Your workout was deleted successfully</h1>
                   <h1 className="w3-xxlarge w3-text-grey">View your <Link to="/profile/workouts">workouts</Link></h1>
                   <h1 className="w3-jumbo"></h1>
               </div>
               <div className="w3-half w3-container w3-xlarge w3-text-grey">
                   {/* <p className="">We build design teams
                   - we break things down and build it better
 - we deliver the best of solutions</p>
                   <p>InShock means powerful simplicity</p> */}
               </div>
           </div>

           {/* Second Grid: Resent   */}
           {/* <div className="w3-panel w3-text-grey">
               <h4>MOST RECENT WORK:</h4>
           </div>
           <div className="w3-row">
               <div className="w3-half w3-container">
                   {/* <img src={pic2} style={{ width: '100%' }} /> */}
               {/* </div>
               <div className="w3-half w3-container">
                   {/* <img src={pic1} style={{ width: '100%' }} /> */}
                   {/* <p className="w3-xlarge w3-text-grey">
                       Demos, Logos, Reports, Names, Events, Media, Wordpress, Google, Books, Optimisations</p>
               </div>  */}
            </div>
           </div>
    );
}
export default workoutDeleted;
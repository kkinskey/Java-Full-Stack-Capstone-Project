
// import AboutUs from '../aboutUs/AboutUs';
import SignUp from '../sign-up/SignUp';



import {Route, withRouter, BrowserRouter as Router} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Home from '../../Pages/home';
import Header2 from '../header2';
import ThankYou from '../../Pages/ThankYou';
import Profile from '../../Pages/profile';
import Workout from '../../Pages/CreateWorkout';
import Profile2 from '../../Pages/Profile2';
import PictureUploader from '../../Pages/imageupload';
import workoutCreated from '../../Pages/workoutcreated';
import workoutDeleted from '../../Pages/workoutdeleted';


const Layout = (props) => {

    return(
        <div>
            <Header2/>
            <Route path="/home" component={Home}></Route>
            {/* <Route path="/profile" component={Profile}></Route> */}
            <Route path="/profile" component={Profile2}></Route>
            <Route path="/profile1" component={Profile}></Route>
            <Route path="/workout" component={Workout}></Route>
            {/* <Route path="/imageupload" component={PictureUploader}></Route> */}
         

            {/* <Route path="/potatoes" component={AboutUs}></Route> */}
          <Route path="/sign-up" component={SignUp}></Route>
          <Route path="/thank-you" component={ThankYou}></Route>
          <Route path="/workoutcreated" component={workoutCreated}></Route>
          <Route path="/workoutdeleted" component={workoutDeleted}></Route>
          
          
        </div>
    )
}
export default withRouter(Layout);
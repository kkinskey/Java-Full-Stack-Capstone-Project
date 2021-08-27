import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import {Route, withRouter, BrowserRouter as Router} from 'react-router-dom';
import Home from './Pages/home';
import SignUp from './component/sign-up/SignUp';
import ThankYou from './Pages/ThankYou';
import Login from './Pages/login';
import Profile from './Pages/profile';
import Header1 from './component/header';





function App() {
  return (
    <div className="App">
      <Router>
      <Header1/>
        <Switch>
        
          <Route exact path="/home" component={Home} />
          <Route exaxt path="/sign-up" component={SignUp} />
          <Route exaxt path="/login" component={Login} />
          <Route exaxt path="/thank-you" component={ThankYou} />
          <Route exaxt path="/profile" component={Profile} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;

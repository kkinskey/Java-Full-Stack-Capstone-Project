import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

class Footer extends Component {
    render() {
        return(
          <footer classname="footer py-4">
  <div classname="container">
    <div classname="row align-items-center">
      <div classname="col-lg-4 text-lg-start">Copyright © Your Website 2021</div>
      <div classname="col-lg-4 my-3 my-lg-0">
        <link classname="btn btn-dark btn-social mx-2" href="#!" /><i classname="fab fa-twitter" />
        <link classname="btn btn-dark btn-social mx-2" href="#!" /><i classname="fab fa-facebook-f" />
        <link classname="btn btn-dark btn-social mx-2" href="#!" /><i classname="fab fa-linkedin-in" />
      </div>
      <div classname="col-lg-4 text-lg-end">
        <a classname="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
        <a classname="link-dark text-decoration-none" href="#!">Terms of Use</a>
      </div>
    </div>
  </div>
</footer>

        )
    };
};
export default Footer;
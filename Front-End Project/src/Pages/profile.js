import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom';
const Profile = (props) => {

    const history = useHistory();

    const logout = () => {
        localStorage.clear();
        history.push('/');
    }
return(
<div>
<section class="page-section bg-light" id="portfolio">
            <div class="container">
                {/* <div class="text-center">
                    <h2 class="section-heading text-uppercase">Portfolio</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div> */}
                <div class="row">
                    <div class="col-lg-4 col-sm-6 mb-4">
                        {/* <!-- Portfolio item 1--> */}
                        <div class="portfolio-item">
                        {/* <form className="d-flex">
              <button onClick={logout} className="btn btn-outline-success" type="button">Log Out</button>
            </form> */}
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="assets/img/portfolio/1.jpg" alt="..." />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading"><Link className="navbar-brand" to="/workout">Create Workout</Link>
                                
                                </div>
                                <div class="portfolio-caption-subheading text-muted">Create Workout</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        {/* <!-- Portfolio item 2--> */}
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="assets/img/portfolio/2.jpg" alt="..." />
                            </a>
                            <div class="portfolio-caption">
                            <Link className="portfolio-link" to="/profile/workouts">Workouts</Link>
                                <div class="portfolio-caption-heading"></div>
                                <div class="portfolio-caption-subheading text-muted"></div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="row">
                    {/* <div class="col-lg-4 col-sm-6 mb-4 mb-sm-0"> */}
                        
                        {/* <!-- Portfolio item 5--> */}
                        {/* <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="assets/img/portfolio/5.jpg" alt="..." />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Southwest</div>
                                <div class="portfolio-caption-subheading text-muted">Website Design</div>
                            </div>
                        </div>
                    </div> */}
                    <div class="col-lg-4 col-sm-6 mb-4">
                        {/* <!-- Portfolio item 3--> */}
                        <div class="portfolio-item">
                            
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="assets/img/portfolio/3.jpg" alt="..." />
                            
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading"></div>
                                <a class="portfolio-link" data-bs-toggle="modal" href="/profile/info">
                                
                                <Link to="/profile/info"></Link>
                                Profile Information
                                </a>
                                <div class="portfolio-caption-subheading text-muted"></div>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                        {/* <!-- Portfolio item 4--> */}
                        <div class="portfolio-item">
                            
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="assets/img/portfolio/4.jpg" alt="..." />
                            
                            <div class="portfolio-caption">
                            
                                <div class="portfolio-caption-heading">
                                <a class="portfolio-link" 
                                data-bs-toggle="modal"
                                href="/calendar.html">
                                    Schedule
                                    </a>
                                    </div>
                                <div class="portfolio-caption-subheading text-muted"></div>
                            </div>
                        </div>
                    </div>
                    {/* <div class="col-lg-4 col-sm-6">
                        {/* <!-- Portfolio item 6--> */}
                        {/* <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="assets/img/portfolio/6.jpg" alt="..." />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Window</div>
                                <div class="portfolio-caption-subheading text-muted">Photography</div>
                            </div>
                        </div>
                    </div> */}
                </div>
                </div>
            
        </section>
</div>
);
};
export default Profile;
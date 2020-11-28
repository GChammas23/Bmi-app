import React, { Component } from 'react';
import '../App.css';
import NavbarComponent from './Navbar';
import Footer from './Footer';
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

class AboutUs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <NavbarComponent history={this.props.history} />
                <div className="home-body">
                    <h1>About Page</h1>
                    <p>My BMI is a web application created using react and redux. This app allows users to calculate their bmi based on the weight and height they enter.
                        The user will be able to see what is their condition after getting the result of the bmi computation. The app will suggest the ideal weight that the user must have 
                        to stay fit and in the normal weight range. The user can also see their progress by checking the graph page which displays the various bmi values calculated for this 
                        specific user. It is important to note that this app should not be a substitue of consulting real doctors because HEALTH IS NOT A GAME<span>😊</span>
                    </p>
                </div>
                <div className="contact-us">
                    <h1>Contact us!</h1>
                    <p>We would me more than glad to receive input from our users so we could give you the best experience that we can.</p>
                    <p><FontAwesomeIcon icon={faAt} /> Email:<a href="mailto: gabrielchammas23@gmail.com">gabrielchammas23@gmail.com</a></p>
                    <p> Check us out on: <FontAwesomeIcon icon={faFacebook} size="2x" />, <FontAwesomeIcon icon={faInstagram} size="2x" /> {"&"} <FontAwesomeIcon icon={faLinkedinIn} size="2x" /></p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default AboutUs;
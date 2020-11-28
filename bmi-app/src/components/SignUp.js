import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class AboutUs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <div className="home-body">
                    <h1>Create an account</h1>
                    <h6>Please fill the form below to sign up</h6>
                    <Link className="App-link" to="/"> Go back </Link>
                </div>
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={this.insertNewUser} method="POST">
                            <div className="form-group row">
                                <label className="form-label">Username:</label>
                                <input className="form-control" type="text" id="username" name="username" placeholder='Enter username' required size="10" onChange={this.handleUsernameChange} /><br />
                            </div>
                            <div className="form-group row">
                                <label className="form-label">Password:</label>
                                <input className="form-control" type="password" id="password" aria-describedby="passwordHelpBlock" name="password" placeholder='Enter password' required size="10" onChange={this.handlePasswordChange} /><br />
                                <small id="passwordHelpBlock" className="pass-text">
                                    Your password must contain between 8 to 20 characters.
                                </small>
                            </div>
                            <div className="form-group row">
                                <label className="form-label">Confirm password:</label>
                                <input className="form-control" type="password" id="confPassword" aria-describedby="confasswordHelpBlock" name="confPassword" placeholder='Confirm password' required size="10" onChange={this.handleConfPasswordChange} /><br />
                                <small id="confpasswordHelpBlock" className="pass-text">
                                    Please make sure to match both passwords!
                                </small>
                            </div>
                            <input className="btn bg-primary text-light" type="submit" value="Sign up" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default AboutUs;
import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import actions from '../redux/actions/users';
import { connect } from 'react-redux';

class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.insertNewUser = this.insertNewUser.bind(this);
        this.state = { Username: '', Password: '', ConfPassword: '' };
    }

    componentDidMount() {
    }

    handleUsernameChange = event => {
        event.preventDefault();
        this.setState({ Username: event.target.value });
    };

    handlePasswordChange = event => {
        event.preventDefault();
        this.setState({ Password: event.target.value });
    };

    handleConfPasswordChange = event => {
        event.preventDefault();
        this.setState({ ConfPassword: event.target.value });
    };

    insertNewUser = event => {
        event.preventDefault();
        const { Username } = this.state;
        const { Password } = this.state;
        const { ConfPassword } = this.state;

        let account = {
            username: Username,
            password: Password,
        }

        //Check if passwords length is valid
        if (Password.length >= 8 && Password.length <= 20) {
            //Check if both passwords are the same
            if (Password === ConfPassword) {
                //Check if username is already in use
                this.props.dispatch(actions.findUsername({ username: Username }));

                console.log(this.props.foundUser);

                if (this.props.foundUser !== null) {
                    alert("The username chosen is already in use!");
                }
                else {
                    //Call the actions method
                    this.props.dispatch(actions.createUser(account));

                    if (this.props.didCreate) {
                        alert("Account successfully created! Redirecting to home page");
                        localStorage.setItem("username", account.Username);
                        localStorage.setItem("password", account.pass);
                    }
                    else {
                        alert("An error occured while trying to create your account");
                    }
                }

            }
            else {
                alert("The passwords entered do not match!");
            }
        }
        else {
            alert("The password should have 8 to 20 characters!");
        }

    };

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

const mapStateToProps = state => ({
    didCreate: state.userReducer.didCreate,
    foundUser: state.userReducer.foundUser,
})

export default connect(mapStateToProps)(CreateUser);
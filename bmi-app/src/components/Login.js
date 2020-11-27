import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import actions from '../redux/actions/users';
import { connect } from 'react-redux';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
    }

    componentDidMount() {
        this.props.dispatch(actions.getUsers());
    }

    handleUsernameChange = event => {
        event.preventDefault();
        this.setState({ username: event.target.value });
    };

    handlePasswordChange = event => {
        event.preventDefault();
        this.setState({ password: event.target.value });
    };

    handleLogin = event => {
        event.preventDefault();
        const { username } = this.state;
        const { password } = this.state;
        let isFound = false;

        for (let i = 0; i < this.props.users.length; i++) {
            if (this.props.users[i].username === username && this.props.users[i].password === password) {
                isFound = true;
            }
        }

        if (isFound) {

            alert("Login successful");
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            this.props.history.push("/Home");

        }
        else {
            alert("Login unsuccessful");
        }


    }


    render() {
        return (
            <div className="App">
                <img src="App-logo.png" id="logo_image" alt="App logo"></img>
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title">Log in</h1>
                        <h6>Please enter your username and password to login</h6>
                        <form onSubmit={this.handleLogin} method="POST" className="">
                            <div className="form-group row">
                                <label className="form-label">Username:</label>
                                <input className="form-control" type="text" onChange={this.handleUsernameChange} id="username" name="username" placeholder='Enter username' required size="10" /><br />
                            </div>
                            <div className="form-group row">
                                <label className="form-label">Password:</label>
                                <input className="form-control" type="password" onChange={this.handlePasswordChange} id="pass" name="password" placeholder='Enter password' required size="10" /><br />
                            </div>
                            <input className="btn bg-primary text-light" type="submit" value="Login" />
                            <h6>Don't have an account? <Link className="App-link" to="/Signup">Click here to start!</Link></h6>
                        </form>
                    </div>
                </div>
            </div>
        )
    };
}

const mapStateToProps = state => ({
    users: state.userReducer.users,
})

export default connect(mapStateToProps)(LoginForm);
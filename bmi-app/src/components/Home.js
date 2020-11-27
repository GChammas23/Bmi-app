import React, { Component } from 'react';
import '../App.css';
import NavbarComponent from './Navbar';

class HomePage extends Component {
    constructor(props) {
        super(props);
    }


    calculateBmi = event => {
        event.preventDefault();
        this.props.history.push("/Compute");
    }

    seeProgress = event => {
        event.preventDefault();
        this.props.history.push("/Rides");
    }

    render() {
        return (
            <div className="App">
                <NavbarComponent history={this.props.history} />
                <div className="home-body">
                    <h2>Welcome to My Bmi</h2>
                    <p><i>Health is wealth</i></p>
                    <p>You can calculate your bmi using our calculator and check your progress in the graph!</p>
                </div>
                <div className="card-group">
                    <div className="card" id="home-card">
                        <div className="card-body" onClick={this.calculateBmi}>
                            <img className="card-img-top" src="card1.jpg" alt="Calculator"></img>
                            <br />
                            <h2>Calculate</h2>
                            <p>Calculate your bmi</p>
                        </div>
                    </div>
                    <div className="card" id="home-card" onClick={this.seeProgress}>
                        <div className="card-body">
                            <img src="card2.gif" className="card-img-top" alt="Graph"></img>
                            <h2>Your graph</h2>
                            <p>Check your bmi values over time</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;
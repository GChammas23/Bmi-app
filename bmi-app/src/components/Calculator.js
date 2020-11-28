import React, { Component } from 'react';
import '../App.css';
import NavBarComponent from './Navbar';
import Footer from './Footer';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import actions from '../redux/actions/bmi';
import { connect } from 'react-redux';


class Calculator extends Component {
    constructor(props) {
        super(props);
        this.computeBmi = this.computeBmi.bind(this);
        this.state = { weight: 30, height: 0, bmi: 0 };
    }

    componentDidMount() {
    }

    handleWeightChange = (event, newValue) => {
        event.preventDefault();
        this.setState({ weight: newValue });
    }

    checkbmiState = (bmi) => {
        if(bmi < 18.5){
            return "Underweight";
        }
        else if(bmi >= 18.5 && bmi <= 24.9){
            return "Normal";
        }
        else if(bmi >= 25 && bmi <= 29.9){
            return "Overweight";
        }
        else if(bmi >= 30){
            return "Obese";
        }
    }

    computeBmi = (event) => {
        event.preventDefault();
        let weight = parseFloat(this.state.weight);
        let height = parseFloat(this.state.height);

        let bmi = (weight / Math.pow(height, 2)).toPrecision(4);

        let data = {
            weight: weight,
            height: height,
            username: localStorage.getItem("username"),
            bmi: bmi,
        }

        let status = this.checkbmiState(bmi);

        alert("Your bmi is: " + bmi + ". You are considered: " + status);

        this.props.dispatch(actions.addBmi(data));
    }

    handleHeightChange = (event, newValue) => {
        event.preventDefault();
        this.setState({ height: newValue });
    }

    render() {
        return (
            <div className="App">
                <NavBarComponent history={this.props.history} />
                <div className="home-body">
                    <h1>Calculate your BMI</h1>
                    <h6>Please fill the form below to find out your bmi</h6>
                </div>
                <div className="card">
                    <div className="card-body">
                        <form method="POST" >
                            <div className="form-group row">
                                <Typography id="input-slider" gutterBottom>
                                    Weight (kg)
                                </Typography>
                                <Slider value={this.state.weight}
                                    onChange={this.handleWeightChange}
                                    valueLabelDisplay="auto"
                                    min={30}
                                    max={200}
                                    step={0.5} />
                            </div>
                            <div className="form-group row">
                                <Typography id="input-slider" gutterBottom>
                                    Height (meters)
                                </Typography>
                                <Slider value={this.state.height}
                                    onChange={this.handleHeightChange}
                                    valueLabelDisplay="auto"
                                    max={2.5}
                                    step={0.1} />
                            </div>
                            <input className="btn bg-primary text-light" type="submit" onClick={this.computeBmi} value="Compute" />
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    didAdd: state.userReducer.didAdd,
})

export default connect(mapStateToProps)(Calculator);
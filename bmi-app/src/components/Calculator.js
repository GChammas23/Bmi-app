import React, { Component } from 'react';
import '../App.css';
import actions from '../redux/actions/users';
import NavBarComponent from '../components/Navbar';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { Input } from '@material-ui/core';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.computeBmi = this.computeBmi.bind(this);
        this.state = { weight: 30, height: 1, bmi: 0 };
    }

    componentDidMount() {
    }

    handleWeightChange = (event, newValue) => {
        event.preventDefault();
        this.setState({ weight: newValue });
    }

    handleWeightInputChange = (event) => {
        event.preventDefault();
        let newValue = Number(event.target.value);
        this.setState({ weight: newValue });
    }

    computeBmi = () => {
        let weight = this.state.weight;
        let height = this.state.height;

        let bmi = Math.round(weight / Math.pow(height, 2));
        this.setState({ bmi }, () => {
            alert(this.state.bmi);
        })
    }

    handleHeightChange = (event, newValue) => {
        event.preventDefault();
        this.setState({ height: newValue });
    }

    handleHeightInputChange = (event) => {
        event.preventDefault();
        let newValue = Number(event.target.value);
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
                        <form>
                            <div className="form-group row">
                                <Typography id="input-slider" gutterBottom>
                                    Weight (kg)
                                </Typography>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs>
                                        <Slider value={this.state.weight}
                                            onChange={this.handleWeightChange}
                                            valueLabelDisplay="auto"
                                            min={30}
                                            max={200} />
                                    </Grid>
                                    <Grid item>
                                        <Input value={this.state.weight}
                                            margin="dense"
                                            onChange={this.handleWeightInputChange}
                                            inputProps={{
                                                step: 0.5,
                                                min: 30,
                                                max: 200,
                                                type: 'number',
                                            }} />
                                    </Grid>
                                </Grid>
                            </div>
                            <div className="form-group row">
                                <Typography id="input-slider" gutterBottom>
                                    Height (meters)
                                </Typography>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs>
                                        <Slider value={this.state.height}
                                            onChange={this.handleHeightChange}
                                            valueLabelDisplay="auto"
                                            max={2.5}
                                            step={0.1} />
                                    </Grid>
                                    <Grid item>
                                        <Input value={this.state.height}
                                            margin="dense"
                                            onChange={this.handleHeightInputChange}
                                            inputProps={{
                                                step: 0.1,
                                                min: 1,
                                                max: 2.5,
                                                type: 'number',
                                            }} />
                                    </Grid>
                                </Grid>
                            </div>
                            <input className="btn bg-primary text-light" onClick={this.computeBmi} type="submit" value="Compute" />
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

export default connect(mapStateToProps)(Calculator);
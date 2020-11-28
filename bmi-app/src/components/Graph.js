import React, { Component } from 'react';
import '../App.css';
import NavBarComponent from './Navbar';
import Footer from './Footer';
import { connect } from 'react-redux';
import ReactApexChart from 'react-apexcharts';
import { getValues } from '../actions/bmi.actions';

class Graph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [{
                data: []
            }],
            options: {
                chart: {
                    type: 'line',
                    height: 350
                },
                stroke: {
                    curve: 'straight',
                },
                dataLabels: {
                    enabled: false
                },
                title: {
                    text: 'BMI variation chart',
                    align: 'left'
                },
                markers: {
                    hover: {
                        sizeOffset: 4
                    }
                }
            },
        };
    }

    componentDidMount() {
        let username = localStorage.getItem("username");
        getValues({ username: username }).then(res => {
            let results = res.result;
            let values = []
            for(let i = 0; i < results.length; i++){
                values.push(results[i].bmi);
            }
            this.setState({series: [{
                name: "Bmi",
                data: values,
            }]});
        }).catch(error => {
            alert("An error occured while fetching the values from the database. Error: " + error);
        })
    }


    render() {
        return (
            <div className="App">
                <NavBarComponent history={this.props.history} />
                <div className="home-body">
                    <h1>Your bmi chart</h1>
                    <h6>Find below your bmi chart representing your fluctuations in bmi</h6>
                </div>
                <div className="card">
                    <div className="card-body">
                        <ReactApexChart type="line" options={this.state.options} series={this.state.series} width={1000} />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    values: state.bmiReducer.values,
})

export default connect(mapStateToProps)(Graph);
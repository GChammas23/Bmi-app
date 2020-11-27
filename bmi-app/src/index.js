import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from '../src/components/Login';
import CreateUser from '../src/components/SignUp';
import HomePage from '../src/components/Home';
import Calculator from '../src/components/Calculator';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { configureStore, configurePersistor } from './redux/store/store';
// Redux setup
const store = configureStore();
const persistor = configurePersistor(store);
const wrapper = document.getElementById("root");

class RouterNavigationSample extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            <>
              <Route exact path="/" render={(props) => <LoginForm {...props} />} />
              <Route path="/Signup" render={(props) => <CreateUser {...props} />} />
              <Route path="/Home" render={(props) => <HomePage {...props} />} />
              <Route path="/Compute" render={(props) => <Calculator {...props} />} />
            </>
          </div>
        </Router>
      </Provider>
    );
  }
};

const rootElement = document.getElementById("root");
ReactDOM.render(<RouterNavigationSample />, rootElement);

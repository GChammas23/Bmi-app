import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class RouterNavigationSample extends React.Component {
  render() {
    return (
      <h1>Hello</h1>
    );
  }
};

const rootElement = document.getElementById("root");
ReactDOM.render(<RouterNavigationSample />, rootElement);

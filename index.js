import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import MiniChart from './MiniChart.jsx';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <MiniChart
          strokeColor="#FF6600"
          activePointColor="#FF6600"
          activePointRadius={8}
          strokeWidth={5}
          labelFontSize={50}
          width={500}
          height={100}
          dataSet={[0, -20, 343, 49.3, -100, 200, 78]}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

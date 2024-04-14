import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className='div'>
        <h1>SIMPLE  COUNTER   APP</h1>
        <h2>{this.state.count}</h2>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button style={{ fontSize: '24px', padding: '10px 20px', backgroundColor: 'green', color: 'white', border: 'none' }} onClick={this.handleIncrement}>+1</button>
          <button style={{ fontSize: '24px', padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none' }} onClick={this.handleReset}>reset</button>
          <button style={{ fontSize: '24px', padding: '10px 20px', backgroundColor: 'red', color: 'white', border: 'none' }} onClick={this.handleDecrement}>-1</button>
        </div>
      </div>
    );
  }
}

export default App;

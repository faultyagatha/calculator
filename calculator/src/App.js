import React from 'react';
import './App.css';

import Operator from './components/Operator';
import Operand from './components/Operand';
import LastOperation from './components/LastOperation';
import Result from './components/Result';

export default class App extends React.Component 
{
  constructor() 
  {
    super();

    this.state = {
      operandOne: '',
      operandTwo: '',
      result: 'Result',
      lastOperation: 'Last Operation'
    };
  }

  onOperatorClick = (e) => 
  {
    let isValid = this.validateInput();
    if (!isValid) return; //return early if invalid

    let result = 0;
    // debugger;
    switch (e) 
    { //TODO: round float numbers
      case "+":
        result = (parseFloat(this.state.operandOne) + parseFloat(this.state.operandTwo));
        break;
      case "-":
        result = (parseFloat(this.state.operandOne) - parseFloat(this.state.operandTwo));
        break;
      case "*":
        result = (parseFloat(this.state.operandOne) * parseFloat(this.state.operandTwo));
        break;
      case "/":
        if (this.state.operandTwo === '0') return;
        result = parseFloat(this.state.operandOne) / parseFloat(this.state.operandTwo);
        result = Math.floor(result * 100) / 100; //leave only two digits after coma
        break;
      case "C":
        result = 0;
        this.reset(); //TODO: fix reset
        break;
      default: this.reset(); //this.setState({ result });
    }

    this.setState({ result });
    this.displayLastOperation(e);
  };

  displayLastOperation = (e) => 
  {
    //TODO: rewrite
    if (e === 'C') {
      console.log('C');
    }
    else {
      let lastOperation = String(
        this.state.operandOne + e + this.state.operandTwo
      );
      this.setState({ lastOperation: lastOperation });
    }
  };

  validateInput = () => 
  {
    // debugger;
    if (this.state.operandOne === '' || this.state.operandTwo === '') {
      console.log('Please enter numbers first');
      window.alert('Please enter numbers first'); //not sure it's a good idea
      return false;
    }
    if (isNaN(this.state.operandOne) || isNaN(this.state.operandTwo)) {
      this.reset();
      console.log('Please enter a valid number');
      window.alert('Please enter a valid number'); //not sure it's a good idea
      return false;
    }
    return true;
  };

  reset = () => 
  {
    this.setState({
      operandOne: '',
      operandTwo: '',
      result: 'Result',
      lastOperation: 'Last Operation'
    });
  };

  render = () => 
  {
    return (
      <div className="App">
        <h1 className="Text">CALCULATOR</h1>
        <Operand onChange={e => this.setState({ operandOne: e })} />
        <Operator onClick={this.onOperatorClick} />
        <Operand onChange={e => this.setState({ operandTwo: e })} />
        <LastOperation lastOperation={this.state.lastOperation} />
        <Result result={this.state.result} />
      </div>
    );
  };
}  

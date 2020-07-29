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
    switch (e) 
    {
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
        if (this.state.operandTwo === '0' || this.state.operandTwo === '0.') return; //prevent NaN when 0/0
        result = parseFloat(this.state.operandOne) / parseFloat(this.state.operandTwo);
        break;
    }
      result = Math.floor(result * 100) / 100; //round to two decimals
      this.setState({ result });
      this.displayLastOperation(e);
  };

  displayLastOperation = (e) => 
  {
    let lastOperation = String(
        this.state.operandOne + e + this.state.operandTwo
      );
      this.setState({ lastOperation: lastOperation });
  };

  validateInput = () => 
  {
    if (this.state.operandOne === '' || this.state.operandTwo === '') 
    {
      window.alert('Please enter numbers first'); //not sure it's a good idea
      return false;
    }
    if (isNaN(this.state.operandOne) || isNaN(this.state.operandTwo)) 
    {
      window.alert('Please enter a valid number'); //not sure it's a good idea
      return false;
    }

    return true;
  };

  render = () => 
  {
    return (
      <div className="App">
        <h1 className="Text">CALCULATOR</h1>
        <div className="Operand1">
          <Operand onChange={e => this.setState({ operandOne: e })} />
        </div>
        <Operator onClick={this.onOperatorClick} />
        <div className="Operand2">
          <Operand onChange={e => this.setState({ operandTwo: e })} />
        </div>
        <LastOperation lastOperation={this.state.lastOperation} />
        <Result result={this.state.result} />
      </div>
    );
  };
}  

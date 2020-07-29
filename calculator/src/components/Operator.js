/** user-input component that triggers calculation */

import React from 'react';

export default class Operator extends React.Component 
{
    render = () => 
    {
        return (
            <div className="Operators">
                <button className="Operator" name="+" onClick={e => this.props.onClick(e.target.name)}>+</button>
                <button className="Operator" name="-" onClick={e => this.props.onClick(e.target.name)}>-</button>
                <button className="Operator" name="*" onClick={e => this.props.onClick(e.target.name)}>*</button>
                <button className="Operator" name="/" onClick={e => this.props.onClick(e.target.name)}>/</button>
            </div>
        );
    };
};
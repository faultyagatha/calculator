import React from 'react';

export default class Operand extends React.Component 
{
    render = () => 
    {
        return (
            <div className="Operand">
                <input
                    className="Input"
                    type="text"
                    placeholder="0"
                    onChange={e => this.props.onChange(e.target.value)}
                />
            </div>
        );
    }
};
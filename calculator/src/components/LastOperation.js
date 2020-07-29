/** read-only display component that shows a last operation */

import React from 'react';

export default class LastOperation extends React.Component 
{
    render = () => 
    {
        let { lastOperation } = this.props;
        return (
            <div className="LastOperation">
                {lastOperation}
            </div>
        );
    };
};
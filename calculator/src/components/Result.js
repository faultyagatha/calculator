/** read-only component */

import React from 'react';

export default class Result extends React.Component 
{
    render = () => 
    {
        let { result } = this.props;
        // console.log(typeof(result));
        return (
            <div className="Result">
                {result}
            </div>
        );
    };
};
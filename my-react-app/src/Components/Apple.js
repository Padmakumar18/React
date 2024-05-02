import React from "react";

class Apple extends React.Component
{
    render()
    {
        const {appleInfo} = this.props
        return(
            <h2>This is Apple Component , Apple type is {appleInfo.type} and {appleInfo.color} color</h2>
        );
    }
}

export default Apple;
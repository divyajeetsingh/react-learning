import React, { Component } from 'react';

class GoogleClick extends Component {
    state = {}



    clickHandlerValue() {
        console.log("Click Handler  Vlaue  ==");
        // console.log(data, "data ")

    }


    render() {
        return (


            <div>
                <button onClick={this.clickHandlerValue}>   Google I</button>
            </div>
        );
    }
}




export default GoogleClick;
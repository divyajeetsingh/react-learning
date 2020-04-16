import React, { Component } from 'react';


class EventBind extends Component {
    constructor(props) {
        super(props);
        this.state = {

            message: 'Hello'
        }
    }



    changeHandler() {

        this.setState({
            message: 'Good Bye'
        })

        console.log(this)


    }
    render() {
        return (<div>
            <h1>Google is My {this.state.message}</h1>
            <button onClick={this.changeHandler.bind(this)}> Google Friends</button>
        </div>)
    }
}

export default EventBind;
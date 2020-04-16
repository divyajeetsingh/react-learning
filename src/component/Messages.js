import React, { component, Component } from 'react'
// import { threadId } from 'worker_threads';
class Message extends Component {

    constructor() {
        super()
        this.state = {
            messgae: 'Welcome visitior'
        }
    }


    changeMessage() {
        this.setState({
            messgae: 'Thank you for subscribing'
        })
    }
    render() {
        return (

            <div>
                <h1>
                    {this.state.messgae}
                </h1>
                <button onClick={() => {
                    this.changeMessage()
                }} > Subscribe</button>
            </div>

        )
    }
}
export default Message
import React, { Component } from 'react';
import './Stylesheet'



class FormHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            topic: ''


        }
    }


    handleUsernameChange = event => {

        this.setState({
            username: event.target.value
        })
    }
    hnadlingPasswordchnage = event => {
        this.setState({
            password: event.target.value
        }
        )
    }
    handlingTopic = event => {
        this.setState({
            topic: event.target.value
        })
    }
    hanadlingFormData = event => {
        alert(`${this.state.username} ${this.state.password} ${this.state.topic}`)
        event.preventDefault()
    }
    render() {


        return (<div>
            <h1>
                Google is my friends
   </h1>
            <form onSubmit={this.hanadlingFormData}>

                <label >UserName </label>

                <input type="text" className="inputborder" onChange={this.handleUsernameChange} value={this.state.username} />

                <br />
                <label >Topic </label>

                <select value={this.state.topic} onChange={this.handlingTopic}>
                    <option value="react"> React</option>
                    <option value="something">Angular</option>
                </select>


                <br />
                <input type="password" className="inputborder" onChange={this.hnadlingPasswordchnage} value={this.state.password} />
                <button type="submit"> Google is My Friend </button>
            </form >
        </div >);
    }
}

export default FormHandler; 
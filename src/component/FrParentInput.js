import React, { Component } from 'react';
import FRInput from './Frinput'
class FrparentCom extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.inputRef = React.createRef()
    }

    clickHandler = () => {
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
                <FRInput ref={this.inputRef}></FRInput>
                <button onClick={this.clickHandler}>focus input jsbsh </button>

            </div>
        );
    }
}

export default FrparentCom;
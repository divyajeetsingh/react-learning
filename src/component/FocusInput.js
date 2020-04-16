import React, { Component } from 'react';
import InputCom from './Input'

class FocusInput extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.componentRef = React.createRef()
    }
    clickHandler = () => {
        this.componentRef.current.focusInput()
    }
    render() {
        return (<div>
            <h1>  Foucs input Divison</h1>

            <InputCom ref={this.componentRef}></InputCom>
            <button onClick={this.clickHandler} >  Focus  Input </button>

        </div>);
    }
}

export default FocusInput;
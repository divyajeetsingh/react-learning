import React, { Component } from 'react';


class InputCom extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.inputRef = React.createRef()
    }

    focusInput() {
        this.inputRef.current.focus()
    }
    render() {
        return (<div>
            <input type="text" ref={this.inputRef} />
        </div>);
    }
}

export default InputCom;
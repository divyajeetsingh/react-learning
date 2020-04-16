import React, { Component } from 'react';
import './myStyles.css'

class RefComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.inputRef = React.createRef()

        //  second Approach 
        this.cbrRef = null
        this.setCbrRef = element => {
            this.cbrRef = element
        }

    }

    componentDidMount() {
        // console.log(this.inputRef, "Creaqte Ref  Method ")
        // this.inputRef.current.focus()
        //second AProach


    }

    clickHandeler = () => {
        alert(this.inputRef.current.value)
    }
    render() {
        return (<div><input className="inputborder" ref={this.inputRef} type="text" />
            <input className="inputborder" ref={this.setCbrRef} type="text" />
            <button onClick={this.clickHandeler}>   Click</button>

        </div>
        );
    }
}

export default RefComponent;
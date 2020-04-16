import React, { Component } from 'react';

import PurexComponent from './pureComponent'
import RegularComponent from './regComponent'

import MemoComp from './Memo'

class ParentComponentCC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ' divyajeetsingh '
        }
    }

    componentDidMount() {
        console.log("sjsnhjsbhj")
        setInterval(() => {
            console.log("sjsnhjsbhj")
            this.setState({
                name: "Divyajeet "
            })
        }, 2000)
    }
    render() {
        return (<div>

            <h1>Google is jdknbdjh ssss</h1>
            <RegularComponent name={this.state.name}></RegularComponent>
            <PurexComponent name={this.state.name}></PurexComponent>
            <MemoComp name={this.state.name}></MemoComp>


        </div>);
    }
}

export default ParentComponentCC;   
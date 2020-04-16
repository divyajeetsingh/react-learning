import React, { Component } from 'react';


class RegularComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

        console.log("Regular  component")
        return (<div >  {this.props.name} </div>);
    }
}

export default RegularComponent;
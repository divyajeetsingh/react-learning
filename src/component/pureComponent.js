import React, { PureComponent } from 'react';


class PurexComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        console.log("Pure Component")
        return (<div >  {this.props.name} Pure Component  </div>);
    }
}

export default PurexComponent;
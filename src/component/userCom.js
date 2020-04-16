import React, { Component } from 'react';


class UserComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div>
            <h1>
                {this.props.name(true)}
            </h1>
        </div>);
    }
}

export default UserComponent;
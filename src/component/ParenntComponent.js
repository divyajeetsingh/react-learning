import React, { Component } from 'react';

import ChildComponent from './childComponent'
class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parentName: 'Parent '
        }

        this.geertParent = this.geertParent.bind(this)
    }


    geertParent(childData) {
        alert(`Hello ${this.state.parentName} from  ${childData}`)
    }
    render() {
        return (<div>
            <ChildComponent greetHandler={this.geertParent}>     </ChildComponent>
        </div>)
    }
}

export default Parent; 
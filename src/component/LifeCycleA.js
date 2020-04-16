import React, { Component } from 'react';

import LifCycleB from './LifeCycleB'

class LifCycleA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Divyajeet singh'
        }

        console.log("LifeCyleA  Construction ")
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCyle A getDerivedStateFromProps')
        return null;
    }

    componentDidMount() {
        console.log('LifeCyle A  componentDidMount ')
    }
    shouldComponentUpdate() {
        console.log('LifeCycleA should Component Update ')
        return true
    }
    getSnapshotBeforeUpdate() {

        console.log('LifeCylA getSnapShotBeforeUpdate ')
        return null
    }
    componentDidUpdate() {
        console.log('LifeCyleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'divyajeet Singh  Fx'
        })
    }
    render() {
        return (<div>kldnskjsnbs

            <h1>   {this.state.name}</h1>

            <button onClick={this.changeState}> Change State </button>

            <LifCycleB></LifCycleB>
        </div>);
    }
}

export default LifCycleA;
import React, { Component } from 'react';
// import './App.cd'


class LifCycleB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Divyajeet singh'
        }

        console.log("LifeCyleB  Construction ")
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCyle B getDerivedStateFromProps')
        return null;
    }

    componentDidMount() {
        console.log('LifeCyle B  componentDidMount ')
    }

    shouldComponentUpdate() {
        console.log('LifeCycleB should Component Update ')
        return true
    }
    getSnapshotBeforeUpdate() {

        console.log('LifeCylB getSnapShotBeforeUpdate ')
        return null
    }
    componentDidUpdate() {
        console.log('LifeCyleB componentDidUpdate')
    }
    render() {
        return (<div>kldnskjsnbs</div>);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }
}

export default LifCycleB;
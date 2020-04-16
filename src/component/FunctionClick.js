import React from 'react'

function FunctionClick() {


    function FunctionClickValue() {
        console.log(" Function  Click  ")
    }

    return (<div>
        <button onClick={FunctionClickValue}>ddk</button>
    </div>);

}

export default FunctionClick;
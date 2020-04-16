import React from 'react'
const GreetWorld = props => {

    //  You can not re write  Props here    
    console.log(props)
    return (<div>
        <h1>Hello {props.name} According  {props.heroName}</h1>

        {props.children}
    </div>)

}


export default GreetWorld
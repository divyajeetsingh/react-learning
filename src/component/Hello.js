import React from 'react'


const Hello = () => {


    // Withou Jsx
    // return (

    //     <h1>
    //         Google is my friend's
    //  </h1>

    // )


    // With jsx 
    return (

        // React.createElement('div', { id: 'google' }, 'Google is My Friend')
        React.createElement('div', { 'className': "Google" }, React.createElement('h1', null, "Google is my friends"))
        //For   htmlFor
        //Class className
        //onclick onClick
        //tabindex tabIndex
    )
}



export default Hello  
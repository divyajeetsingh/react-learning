import React from 'react';

import PersonBreakComponent from './personList'
function NameList() {



    console.log("fdddjn")

    const names = ['Bruce', 'Clark', 'Diana']



    const presonList = [{
        id: 1,
        name: "Divyajeet Singh Fx",
        intrest: 'No one'
    },
    {
        id: 2,
        name: 'No  Friends',
        intrest: 'Python '
    }








    ]


    // const filterPerson = presonList.map((person) => <h2>{person.name}  is intrested in {person.intrest}   </h2>



    // )


    // Second Approach to access person list  

    //  key  make unioque in the list 
    const filterPerson = presonList.map((person) => <PersonBreakComponent key={person.name.toString()} person={person} />)





    const nameList = names.map(name =>
        <h2 key={name} >  {name}</h2>
    )


    return (

        <div>
            {nameList}
            {filterPerson}
        </div>
    )
    // return (<div>


    //     {names.map(name => <h2>{name}</h2>)}

    //     {/* <h2>
    //         {names[0]}
    //     </h2>


    //     <h2>
    //         {names[1]}
    //     </h2>

    //     <h2>
    //         {names[2]}
    //     </h2> */}
    // </div>)
}


export default NameList
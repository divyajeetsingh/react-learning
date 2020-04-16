import React, { component, Component } from 'react'
// import { threadId } from 'worker_threads';
class Greeting extends Component {

    constructor() {
        super()
        this.state = {
            isLogged: true

        }
    }


    render() {


        //Fourth  Approach  here 
        return this.state.isLogged && <div> Welcome  Divyajeet </div>

        //Third  Approach  here

        console.log("google  is google my friends ")

        // return this.state.isLogged ? (<div> Welcome  Divyajeet  Singh Fx </div>) : (<div>Welcome  Guest</div>)



        //  Second  Approach  here
        // console.log(this.state, "logged ")

        // let message;
        // if (this.state.isLogged) {

        //     message = "Divyajeet singh  Fx "
        // }
        // else {
        //     message = 'Welcome Visitor'
        // }


        // return message








        // First  Approach  Goes here

        // if (this.state.isLogged) {

        //     return (




        //         <div>

        //             <h1    >

        //                 Welcome ,  divyakeet singh fx

        //             </h1>
        //         </div>




        //     )
        // }
        // else {
        //     return <div>              Welcome visitor </div>
        // }

    }
}
export default Greeting
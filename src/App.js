import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { Greet } from './component/Greet'
import GreetWorld from './component/Props'
import Welcome from './component/Welcome'
import Hello from './component/Hello'
import Message from './component/Messages'
import FunctionClick from './component/FunctionClick'
import Counter from './component/Counter';
import GoogleClick from './component/classClick';
import EventBind from './component/EventBind'
import Parent from './component/ParenntComponent'
import Greeting from './component/userGreting'
import NameList from './component/userList'
import Stylesheet from './component/Stylesheet'
import FormHandler from './component/formHandling'
import FormHandlerConst from './component/FormHandlingConst'
import LifCycleA from './component/LifeCycleA'
import ParentComponentCC from './component/ParentComponent'
import RefComponent from './component/RefDemo'

import FocusInput from './component/FocusInput'

import FrparentCom from './component/FrParentInput'

import UserComponent from './component/userCom'
import PostList2 from './component/PostList'
import PostForm from './component/PostForm'
function App() {
  return (
    <div className="App">

      <Greet />
      <Welcome />
      <Hello ></Hello>
      <GreetWorld name="Greet Wolrd" heroName="Pythoy" >
        <p>Google is my friends</p>
      </GreetWorld>
      <GreetWorld name="Greet Wolrd" heroName="Google" >
        <p>Google is my friends</p></GreetWorld>
      <GreetWorld name="Greet Wolrd" heroName="Hacker" >
        <button> Hi Jan</button>

      </GreetWorld>
      <Message>

      </Message>

      <Counter>

      </Counter>

      <FunctionClick />

      <GoogleClick />

      <EventBind>

      </EventBind>

      <Parent></Parent>


      <Greeting />

      <NameList></NameList>

      <Stylesheet></Stylesheet>
      <FormHandler></FormHandler>
      <FormHandlerConst></FormHandlerConst>
      <LifCycleA></LifCycleA>
      <ParentComponentCC></ParentComponentCC>
      <RefComponent ></RefComponent>

      <FocusInput></FocusInput>

      <FrparentCom></FrparentCom>
      <UserComponent name={(isLogged) => isLogged ? 'Divyajeet  Singh' : 'guest'}></UserComponent>

      <PostForm />
      <PostList2 />

      {/* <googleGreeting></googleGreeting>
       */}



      {/*  */}
      {/* <GreetWorld name="Google">    </GreetWorld> */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World !
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

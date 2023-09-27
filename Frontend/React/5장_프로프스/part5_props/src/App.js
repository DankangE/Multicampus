import './App.css';
import React from 'react';
import { NewComponent, MyComponent } from './userComponent/NewComponent';
import { ClassComponent, MyClassComponent } from './userComponent/ClassComponent';
import MyCounter from './userComponent/Counter';
import Say from './userComponent/Say';

function App() {
  return (
    <div className="App">
      <NewComponent name="user1" age="30" />
      <hr />

      <MyComponent> React! </MyComponent>
      <hr/>
      <ClassComponent></ClassComponent>
      <hr/>
      <MyClassComponent> MyClassComponent! </MyClassComponent>
      <hr/>
      <MyCounter></MyCounter>
      <hr/>
      <Say></Say>
    </div>
  );
}

export default App;

import React from 'react';
import "./App.css";
import EventPractice from "./Component/EventPractice.js";
import REventPractice from './Component/UseClassEvent';
import FEventPractice from './Component/UserFuncEvent';
import F2EventPractice from './Component/UserFuncEvent2';

function App() {
  return (
    <div className="App">
      <EventPractice/>
      <br/>
      <br/>
      <br/>
      <hr/>
      <REventPractice/>
      <br/>
      <br/>
      <br/>
      <hr/>
      <FEventPractice/>
      <br/>
      <br/>
      <br/>
      <hr/>
      <F2EventPractice/>
    </div>
  );
}

export default App;

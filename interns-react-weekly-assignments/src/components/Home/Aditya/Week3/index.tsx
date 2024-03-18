import React from 'react';
import Counter from './components/counter/Counter';
import Form from './components/form/Form';
import {Assignment3Div} from './styles';
import Status from './components/status/Status';

function App() {
  return (
    <Assignment3Div>
      <div id='counter' className="relative">
        <Counter></Counter>
      </div>
      <div id='form' className="relative">
        <Form></Form>
      </div>
      <div id='status' className="relative">
        <Status></Status>
      </div>
    </Assignment3Div>
  );
}

export default App;

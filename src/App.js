import React from 'react';

import {ComputerClock, WorldClock} from './components/Clock/';

function App(props) {
  return (<div>
    <h1>Clock App Exemplo de acesso a API</h1>
    <ComputerClock />
    <WorldClock />
  </div>);
}

export default App;
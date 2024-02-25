import React, { Fragment } from 'react';

function App() {
  const text = 'Hello World!'

  return (
    <Fragment>
      <h1>Componente App</h1>
      <h2>{ text ? text : <h2>O texto está vazio</h2> }</h2>
    </Fragment>
  );
}

export default App;

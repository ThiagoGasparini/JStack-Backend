import React, { Fragment } from 'react';
import Post from './Post';

function App() {
  const text = 'Hello World!';

  return (
    <Fragment>
      <h1>Componente App</h1>
      <h2>{text ? text : <h2>O texto está vazio</h2>}</h2>

      <hr />

      <Post title="Título da notícia 01" subtitle="Subtítulo da notícia 01" />
      <Post title="Título da notícia 02" subtitle="Subtítulo da notícia 02" />
      <Post title="Título da notícia 03" subtitle="Subtítulo da notícia 03" />
      <Post title="Título da notícia 04" subtitle="Subtítulo da notícia 04" />
    </Fragment>
  );
}

export default App;

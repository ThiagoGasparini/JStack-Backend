import React, { Fragment } from 'react';
import Post from './Post';
import Header from './Header';

function App() {
  return (
    <Fragment>
      <Header title="JStack's Blog">
        <h2>O texto está vazio!</h2>
      </Header>
      <hr />

      <Post title="Título da notícia 01" subtitle="Subtítulo da notícia 01" />
      <Post title="Título da notícia 02" subtitle="Subtítulo da notícia 02" />
      <Post title="Título da notícia 03" subtitle="Subtítulo da notícia 03" />
      <Post title="Título da notícia 04" subtitle="Subtítulo da notícia 04" />
    </Fragment>
  );
}

export default App;

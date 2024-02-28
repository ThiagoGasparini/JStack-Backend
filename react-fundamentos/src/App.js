import React, { Fragment } from 'react';
import Post from './Post';
import Header from './Header';

function App() {
  const posts = [
    { id: 1, title: 'Title#01', subtitle: 'Sub#01', likes: 20 },
    { id: 2, title: 'Title#02', subtitle: 'Sub#02', likes: 10 },
    { id: 3, title: 'Title#03', subtitle: 'Sub#03', likes: 50 },
    { id: 4, title: 'Title#04', subtitle: 'Sub#04', likes: 15 },
  ];

  return (
    <Fragment>
      <Header title="JStack's Blog">
        <h2>O texto está vazio!</h2>
      </Header>
      <hr />
      {posts.map((post) => (
        <Post
          key={post.id}
          likes={post.likes}
          title={post.title}
          subtitle={post.subtitle}
        />
      ))}
    </Fragment>
  );
}

export default App;

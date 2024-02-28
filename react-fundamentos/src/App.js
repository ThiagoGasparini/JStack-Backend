import React, { Fragment, useState } from 'react';
import Post from './Post';
import Header from './Header';

function App() {
  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title#01', subtitle: 'Sub#01', likes: 20 },
    { id: Math.random(), title: 'Title#02', subtitle: 'Sub#02', likes: 10 },
    { id: Math.random(), title: 'Title#03', subtitle: 'Sub#03', likes: 50 },
    { id: Math.random(), title: 'Title#04', subtitle: 'Sub#04', likes: 15 },
  ]);

  const handleRefresh = () => {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title#${prevState.length + 1}`,
        subtitle: `Sub#${prevState.length + 1}`,
        likes: 20,
      },
    ]);
  };

  const handleDelete = (id) => {
    const deletePost = posts.filter((post) => post.id !== id);
    setPosts(deletePost);
  };

  return (
    <Fragment>
      <Header title="JStack's Blog">
        <h2>
          O texto está vazio!
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>
      <hr />
      {posts.map((post) => (
        <div key={post.id}>
          <button onClick={() => handleDelete(post.id)}>Excluir</button>
          <Post
            likes={post.likes}
            title={post.title}
            subtitle={post.subtitle}
          />
        </div>
      ))}
    </Fragment>
  );
}

export default App;

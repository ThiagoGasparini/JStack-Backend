import React, { useState } from 'react';
import Post from './Post';
import Header from './Header';
import { ThemeProvider } from './ThemeContext'

function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: 'Title#01',
      subtitle: 'Sub#01',
      likes: 20,
      read: false,
    },
    {
      id: Math.random(),
      title: 'Title#02',
      subtitle: 'Sub#02',
      likes: 10,
      read: true,
    },
    {
      id: Math.random(),
      title: 'Title#03',
      subtitle: 'Sub#03',
      likes: 50,
      read: false,
    },
    {
      id: Math.random(),
      title: 'Title#04',
      subtitle: 'Sub#04',
      likes: 15,
      read: false,
    },
  ]);

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleRefresh = () => {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title#${prevState.length + 1}`,
        subtitle: `Sub#${prevState.length + 1}`,
        likes: randomNumber(1, 50),
        read: true,
      },
    ]);
  };

  const handleDelete = (id) => {
    const deletePost = posts.filter((post) => post.id !== id);
    setPosts(deletePost);
  };

  return (
    <ThemeProvider>
      <Header title="JStack's Blog">
        <h2>
          Posts da Semana!
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>
      <hr />
      {posts.length ? (
        posts.map((post) => (
          <div key={post.id}>
            <Post post={post} onRemove={() => handleDelete(post.id)} />
          </div>
        ))
      ) : (
        <h2>Nenhum Post Adicionado!!!</h2>
      )}
    </ThemeProvider>
  );
}

export default App;

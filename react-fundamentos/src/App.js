import React, { useState, createContext } from 'react';
import Post from './Post';
import Header from './Header';

export const ThemeContext = createContext('dark');

function App() {
  const [theme, setTheme] = useState('dark');

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

  const handleToggleTheme = () => {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  };

  const handleRefresh = () => {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title#${prevState.length + 1}`,
        subtitle: `Sub#${prevState.length + 1}`,
        likes: 20,
        read: true,
      },
    ]);
  };

  const handleDelete = (id) => {
    const deletePost = posts.filter((post) => post.id !== id);
    setPosts(deletePost);
  };

  return (
    <ThemeContext.Provider value={{ theme, onToggleTheme: handleToggleTheme }}>
      <Header title="JStack's Blog">
        <h2>
          O texto está vazio!
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
    </ThemeContext.Provider>
  );
}

export default App;

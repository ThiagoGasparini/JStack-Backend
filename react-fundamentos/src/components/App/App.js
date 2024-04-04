import React, { useState } from 'react';
import Post from '../Post/Post';
import Header from '../Header';
import { ThemeProvider } from '../../context/ThemeContext';
import { Title } from './styles';

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
  };

  const handleRefresh = () => {
    setPosts(prevState => {
      const highestNumber = Math.max(...prevState.map(post => parseInt(post.title.match(/\d+/))));
      const newNumber = isNaN(highestNumber) ? 1 : highestNumber + 1;
  
      const newTitle = `Title#${newNumber.toString().padStart(2, '0')}`;
      const newSubtitle = `Sub#${newNumber.toString().padStart(2, '0')}`;
  
      return [
        ...prevState,
        {
          id: Math.random(),
          title: newTitle,
          subtitle: newSubtitle,
          likes: randomNumber(1, 50),
          read: true,
        },
      ];
    });
  };

  const handleDelete = (id) => {
    const deletePost = posts.filter((post) => post.id !== id);
    setPosts(deletePost);
  };

  return (
    <ThemeProvider>
      <Header title="JStack's Blog">
        <Title as="h2">
          Posts da Semana!
          <button onClick={handleRefresh}>Atualizar</button>
        </Title>
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

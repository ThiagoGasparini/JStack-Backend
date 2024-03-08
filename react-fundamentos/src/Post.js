import React from 'react';
import PropTypes from 'prop-types';
import PostBody from './PostBody';

export default function Post(props) {
  return (
    <>
      <article>
        <PostBody 
          onRemove={props.onRemove} 
          post={{
            title: props.post.title,
            read: props.post.read,
          }}
          theme={props.theme}
        />
        <br />
        <small>{props.post.subtitle}</small>
        <br />
        Média: {props.post.likes / 2}
      </article>
      <br />
    </>
  );
}

Post.propTypes = {
  theme: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
};

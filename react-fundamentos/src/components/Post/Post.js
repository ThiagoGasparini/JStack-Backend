import React from 'react';
import PropTypes from 'prop-types';
import PostBody from './PostBody';
import { Subtitle, Rate, Container } from './styles';

export default function Post(props) {
  return (
    <>
      <Container>
        <PostBody
          onRemove={props.onRemove}
          post={{
            title: props.post.title,
            read: props.post.read,
          }}
        />
        <Subtitle>{props.post.subtitle}</Subtitle>
        <Rate>Média: {props.post.likes / 2}</Rate>
      </Container>
      <br />
    </>
  );
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
};

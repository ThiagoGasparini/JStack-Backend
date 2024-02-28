import React from 'react';
import PropTypes from 'prop-types';

export default function Post({ title, subtitle, likes }) {
  return (
    <>
      <article>
        <strong>{title}</strong>
        <br />
        <small>{subtitle}</small>
        <br />
        Média: {likes / 2}
      </article>
      <br />
    </>
  );
}

Post.propTypes = {
  likes: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

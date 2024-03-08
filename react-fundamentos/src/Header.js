import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function Header(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <Button onRemove={props.onToggleTheme}>
        Mudar Tema
      </Button>
      {props.children}
    </>
  );
}

Header.propTypes = {
  onToggleTheme: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

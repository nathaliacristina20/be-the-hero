import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Input({ name, ...rest }) {
  const inputRef = useRef(name);
  const { fieldName, defaultValue = '', registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      teste: (ref) => {
        ref.error = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Container
        ref={inputRef}
        className={error && 'has-error'}
        defaultValue={defaultValue}
        {...rest}
      />
      {/* {error && <span className="error">{error}</span>} */}
    </>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
};

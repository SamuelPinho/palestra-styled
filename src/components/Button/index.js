import React from 'react';
import { Default } from './styles';

export const Button = (props) => {
  const { children } = props;

  return (
    <Default {...props}>
      {children}
    </Default>
  );
};

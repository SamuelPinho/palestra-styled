import React from 'react';
import { Default } from './styles';
import { Text } from '../Text';

export const Button = (props) => {
  const { children, color, isOutline, full, small } = props;

  return (
    <Default color={color} isOutline={isOutline} full={full} small={small}>
      <Text text={children} />
    </Default>
  );
};

import React from 'react';

export const Text = (props) => {
  const { text } = props;

  return (
    <div>
      <span>
        {text}
      </span>
    </div>
  )
};

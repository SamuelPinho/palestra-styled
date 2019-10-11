import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs'
import { Button } from './index';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add(
    'Default',
    () => {
      return (
        <Button
          full={boolean('Full Width', false)}
          small={boolean('Small', false)}
          color={select('Color', {
            blue: 'blue',
            red: 'red',
            yellow: 'yellow',
            grey: 'grey',
          }, 'blue')}
        >
          {text('Text', 'Hello World')}
        </Button>
      );
    }
  );

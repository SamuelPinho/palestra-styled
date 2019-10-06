import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
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
        >
          {text('Text', 'Hello World')}
        </Button>
      );
    }
  );

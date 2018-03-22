import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Color Scheme', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)

import * as React from 'react';
import { storiesOf } from '@storybook/react';

const Button = () => (
  <button>Botão novo</button>
)

const stories = storiesOf('Components', module);

stories.add(
  'TicTacToeCell',
  () => <Button />
);

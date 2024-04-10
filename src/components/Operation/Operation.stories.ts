import type { Meta } from '@storybook/react';

import Operation from './Operation.tsx';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Operation> = {
  title: 'Example/Operation',
  component: Operation,
  tags: ['autodocs'],
};

export default meta;

export const OperationConfig = {
  args: {
  }
}

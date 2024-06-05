import type { Meta } from '@storybook/react';

import AddProduct from './AddProduct';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof AddProduct> = {
  title: 'Example/AddProduct',
  component: AddProduct,
  tags: ['autodocs'],
};

export default meta;

export const Count = {
  args: {},
};

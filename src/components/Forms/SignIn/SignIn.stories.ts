import type { Meta } from '@storybook/react';

import { SignIn } from './SignIn';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof SignIn> = {
  title: 'Example/SignInForm',
  component: SignIn,
  tags: ['autodocs'],
};

export default meta;

export const Count = {
  args: {},
};

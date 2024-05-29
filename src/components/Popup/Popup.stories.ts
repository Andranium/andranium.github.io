import type { Meta } from '@storybook/react';

import Popup from './Popup';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Popup> = {
  title: 'Example/Popup',
  component: Popup,
  tags: ['autodocs'],
};

export default meta;

export const PopupConfig = {
  args: {},
};

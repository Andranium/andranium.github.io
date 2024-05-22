import type { Meta } from '@storybook/react';

import Modal from './Modal';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Modal> = {
  title: 'Example/Modal',
  component: Modal,
  tags: ['autodocs'],
};

export default meta;

export const ModalConfig = {
  args: {},
};

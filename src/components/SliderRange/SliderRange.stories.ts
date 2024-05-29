import type { Meta } from '@storybook/react';

import SliderRange from './SliderRange';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof SliderRange> = {
  title: 'Example/SliderRange',
  component: SliderRange,
  tags: ['autodocs'],
};

export default meta;

export const Count = {
  args: {},
};

import type { Meta } from '@storybook/react';

import ProductCard from './ProductCard.tsx';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ProductCard> = {
  title: 'Example/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
};

export default meta;

export const ProductCardConfig = {
  args: {

  }
}

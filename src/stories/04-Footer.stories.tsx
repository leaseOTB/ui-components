import React from 'react';
import { action } from '@storybook/addon-actions';
import { Footer } from '../components/footer';

export default {
  title: 'Footer',
  component: Footer,
};

const mockData = [
  {
    title: 'Column 1',
    items: [
      { item: 'item 1', link: 'https://leaseontheblock.care' },
      { item: 'item 2', link: 'https://google.com' },
    ],
  },
  {
    title: 'Column 2',
    items: [
      { item: 'item 1', link: 'https://leaseontheblock.care' },
      { item: 'item 2', link: 'https://google.com' },
    ],
  },
  {
    title: 'Column 3',
    items: [{ item: 'item 1', link: 'https://leaseontheblock.care' }],
  },
  {
    title: 'Column 4',
    items: [{ item: 'item 1', link: 'https://leaseontheblock.care' }],
  },
];

export const QuroumDemo = () => {
  return <Footer props={mockData} />;
};

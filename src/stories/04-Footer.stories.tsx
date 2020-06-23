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
    item: ['item 1', 'item 2'],
    link: ['https://leaseontheblock.care', 'https://google.com'],
  },
  {
    title: 'Column 2',
    item: ['item 1', 'item 2'],
    link: ['https://leaseontheblock.care', 'https://google.com'],
  },
  {
    title: 'Column 3',
    item: 'item 1',
    link: 'https://leaseontheblock.care',
  },
  {
    title: 'Column 4',
    item: 'item 1',
    link: 'https://leaseontheblock.care',
  },
];

export const QuroumDemo = () => {
  return <Footer props={mockData} />;
};

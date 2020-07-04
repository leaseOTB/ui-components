import React from 'react';
import { action } from '@storybook/addon-actions';
import { Footer } from '../components/footer';

export default {
  title: 'Footer',
  component: Footer,
};

const mockData = [
  {
    title: 'About',
    items: [
      { item: 'item 1', link: 'https://leaseontheblock.care' },
      { item: 'item 2', link: 'https://google.com' },
    ],
  },
  {
    title: 'Software',
    items: [
      { item: 'item 1', link: 'https://leaseontheblock.care' },
      { item: 'item 2', link: 'https://google.com' },
    ],
  },
  {
    title: 'Developers',
    items: [
      { item: 'item 1', link: 'https://leaseontheblock.care' },
      { item: 'item 2', link: 'https://google.com' },
    ]
  },
  {
    title: 'Community',
    items: [
      { item: 'item 1', link: 'https://leaseontheblock.care' },
      { item: 'item 2', link: 'https://google.com' },
    ],
  }
];

export const QuroumDemo = () => {
  return <Footer props={mockData} />;
};

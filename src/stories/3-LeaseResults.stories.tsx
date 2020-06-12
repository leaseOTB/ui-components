import React from 'react';
import { action } from '@storybook/addon-actions';
import LeaseSearchResults from '../components/LeaseSearchResults';

export default {
  title: 'Lease Search Results',
  component: LeaseSearchResults,
}

const mockData = [
  {
    address: '411 Washington',
    contract: '49184027148s29j',
    rent: '500',
  },
  {
    address: '411 Washington',
    contract: '49184027148s29j',
    rent: '500',
  }
]

export const QuroumDemo = () => {
  return (
    <LeaseSearchResults data={mockData}/>
  )
}
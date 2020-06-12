import React from 'react';
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
    address: '402 Washington',
    contract: '1340589238jx0',
    rent: '300',
  }
]

export const QuroumDemo = () => {
  return (
    <LeaseSearchResults data={mockData}/>
  )
}
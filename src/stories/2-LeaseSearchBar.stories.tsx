import React from 'react';
import { action } from '@storybook/addon-actions';
import { LeaseSearchBar } from '../components/LeaseSearchBar';

export default {
  title: 'Lease Search Bar',
  component: LeaseSearchBar,
};

export const QuroumDemo = () => {
  return (
    <LeaseSearchBar/>
  )
}
import React from 'react';
import { TenantOrgCard } from '../components/tenantOrgSearchCard';

export default {
  title: 'TenantOrgCard',
  component: TenantOrgCard,
};

const mockData = {
  image: 'https://s3.amazonaws.com/FringeBucket/image_placeholder.png',
  name: 'Org Test Name',
  memberCount: 100,
  description: 'description of the lizard org',
};

export const QuroumDemo = () => {
  return <TenantOrgCard props={mockData} />;
};

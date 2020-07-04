import React from 'react';
import { TenantOrgCard } from '../components/tenantOrgSearchCard';
import {Grid} from '@material-ui/core'

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
  return  (
    <Grid container direction='row' spacing={9}>
      <Grid item xs={4}>
        <TenantOrgCard props={mockData} />
      </Grid>
      <Grid item xs={4}>
        <TenantOrgCard props={mockData} />
      </Grid>
      <Grid item xs={4}>
        <TenantOrgCard props={mockData} />
      </Grid>
    </Grid>
  )
};

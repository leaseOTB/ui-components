import React from 'react';
import {
  // Grid,
  makeStyles,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  text: {
    color: 'rgb(100, 100, 100)',
    fontSize: '10px',
  },
}));

export const TenantOrgCard = (props: any) => {
  const classes = useStyles();
  return (
    // <Grid item xs={12} sm={6} md={4}>
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.props.image}
          title='Organization Profile Pic'
        />
        <CardHeader
          title={props.props.name}
          subheader={`Members: ${props.props.memberCount}`}
        />
        <CardContent className={classes.text}>
          <Typography gutterBottom variant='h5' component='h2'>
            {props.props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    // </Grid>
  );
};

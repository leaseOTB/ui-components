import React from 'react';
import { ItemData } from './columnItems';
import { List, makeStyles, ListItemText, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: '10px',
    marginLeft: '10px',
  },
  columnTitle: {
    marginLeft: '10px',
    marginRight: '10px',
    textDecoration: 'underline',
  },
  listItem: {
    maxHeight: '20px',
    '&:hover': { cursor: 'pointer', maxHeight: '20px' },
  },
});

export const Column = (props) => {
  const classes = useStyles();
  return (
    <List className={classes.column}>
      <Typography variant='h6' className={classes.columnTitle}>
        {props.title}
      </Typography>
      <ItemData item={props.item} link={props.link} />
    </List>
  );
};

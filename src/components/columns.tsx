import React from 'react';
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
    '&:hover': { color: 'blue', cursor: 'pointer', maxHeight: '20px' },
  },
});

export const Column = (props) => {
  const classes = useStyles();
  return (
    <List className={classes.column}>
      <Typography variant='h6' className={classes.columnTitle}>
        {props.title}
      </Typography>
      <ListItemText className={classes.listItem}>
        <a href={props.link} rel='noreferrer noopener' target='_blank'>
          {props.item}
        </a>
      </ListItemText>
    </List>
  );
};

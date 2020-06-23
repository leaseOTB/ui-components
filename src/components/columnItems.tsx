import React from 'react';
import { makeStyles, ListItemText } from '@material-ui/core';

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

export const Items = (props) => {
  const classes = useStyles();
  console.log(props);
  for (let i = 0; i < props.item.length; i++) {
    let items = props.item[i];
    let links = props.link[i];
    console.log(items, links);
    return (
      <ListItemText className={classes.listItem}>
        <a href={items} rel='noreferrer noopener' target='_blank'>
          {items}
        </a>
      </ListItemText>
    );
  }
};

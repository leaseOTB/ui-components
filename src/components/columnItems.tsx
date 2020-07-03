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

export const ItemData = (props: any) => {
  const classes = useStyles();
  return (
    <>
      {props.items.map((data: any) => {
        return (
          <ListItemText className={classes.listItem}>
            <a href={data.link} rel='noreferrer noopener' target='_blank'>
              {data.item}
            </a>
          </ListItemText>
        );
      })}
    </>
  );
};

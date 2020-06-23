import React from 'react';
import { Column } from './columns';
import {
  List,
  makeStyles,
  Typography,
  Grid,
  IconButton,
} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
  footer: {
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgb(50,50,50)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  main: {
    marginBottom: '10%',
    backgroundColor: 'white',
    minHeight: '50%',
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  sitemap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  columnTitle: {
    marginLeft: '10px',
    marginRight: '10px',
  },
  listItem: {
    color: 'blue',
  },
  bottomFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export const Footer = (props) => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.main}>
        <List className={classes.sitemap}>
          {props.props.map((data) => {
            return (
              <Column title={data.title} item={data.item} link={data.link} />
            );
          })}
          <div className={classes.bottomFooter}>
            <Typography variant='body2' color='primary'>
              © {new Date().getFullYear()} Lease on the Block
            </Typography>
            <Grid item xs={12} sm={3}>
              <IconButton target='__blank' href='https://twitter.com/LeaseOTB'>
                <TwitterIcon />
              </IconButton>
              <IconButton target='__blank' href='https://github.com/zachdt'>
                <GitHubIcon />
              </IconButton>
              <IconButton
                target='__blank'
                href='https://www.linkedin.com/company/43276219'
              >
                <LinkedInIcon />
              </IconButton>
            </Grid>
          </div>
        </List>
      </div>
    </footer>
  );
};

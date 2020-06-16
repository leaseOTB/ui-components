import React from "react";
import { ReactComponent as Search } from "../assets/search.svg";

import {
  TextField,
  Button,
  makeStyles,
  Input,
  FormLabel,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles({
  bed: {
    display: "inline-block",
    color: "#4A5568",
  },
  btn: {
    margin: "0px 5px",
  },
  section: {
    margin: "10px 0px",
  },
  input: {
    margin: "0px 10px",
    padding: "12px ",
    backgroundColor: "#E2E8F0",
    borderRadius: "10px",
    border: "none",
  },
});

export const LeaseSearchBar = () => {
  const classes = useStyles();

  return (
    <div>
      <form action="">
        <Grid container spacing={1} alignItems="baseline">
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={0}
            className={classes.section}
          >
            <Grid item xs={11}>
              <TextField
                id="standard-basic"
                label="Search"
                fullWidth
                required
              ></TextField>
            </Grid>
            <Grid item xs={1}>
              <button
                type="submit"
                style={{
                  display: "inline",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                <span>
                  <Search width="36px" height="36px" />
                </span>
              </button>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}
            className={classes.section}
            style={{ marginRight: "20px" }}
          >
            <Grid item xs={12} md={6}>
              <div>
                <p className={classes.bed}># Bedrooms: </p>
                <span>
                  <Button color="default" className={classes.btn}>
                    0
                  </Button>
                </span>
                <span>
                  <Button color="default">1</Button>
                </span>
                <span>
                  <Button color="default">2</Button>
                </span>
                <span>
                  <Button color="default">3</Button>
                </span>
                <span>
                  <Button color="default">4+</Button>
                </span>
              </div>
            </Grid>
            <Grid item xs={6} md={3}>
              <FormLabel
                htmlFor="rentMin"
                style={{ color: "#4A5568", margin: "0px 10px 0px 0px" }}
              >
                Rent Min
              </FormLabel>
              <Input name="rentMin"></Input>
            </Grid>
            <Grid item xs={6} md={3}>
              <FormLabel
                htmlFor="rentMax"
                style={{
                  margin: "0px 10px 0px 0px",
                  color: "#4A5568",
                }}
              >
                Rent Max
              </FormLabel>
              <Input name="rentMax"></Input>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

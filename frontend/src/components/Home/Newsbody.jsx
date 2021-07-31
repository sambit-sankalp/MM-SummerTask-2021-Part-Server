import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Articles from "./Articles.jsx";
import Squiggles from "../SideBar/squiggles";
import Editorial from "../SideBar/editorials";
import Query from "../SideBar/query";
import Latest from "./Latest";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#f3ea41",
    marginTop: theme.spacing(4),
  },
  side: {
    marginTop: theme.spacing(9),
  },
}));

export default function SimpleContainer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Grid container spacing={0}>
            <Grid item xs={12} md={8}>
              <Articles />
              <Latest />
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.side}>
                <React.Fragment>
                  <CssBaseline />
                  <Container maxWidth="lg">
                    <Paper className={classes.paper}>
                      <Squiggles />
                    </Paper>
                    <Paper className={classes.paper}>
                      <Editorial />
                    </Paper>
                    <Query />
                  </Container>
                </React.Fragment>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
}

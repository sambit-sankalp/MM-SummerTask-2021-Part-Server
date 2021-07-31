import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Events from "./Events";
import Grid from "@material-ui/core/Grid";
import About from "./About";
import Social from "./Social";
import CopyrightIcon from "@material-ui/icons/Copyright";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#111111",
  },
  paperItems: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  copyright: {
    fontSize: "10px",
    textAlign: "center",
    color: "#a0a0a0",
    marginTop: theme.spacing(7),
  },
  item: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper variant="outlined" square className={classes.paper}>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid className={classes.item} item xs={12} md={4}>
                <About />
              </Grid>

              <Grid className={classes.item} item xs={12} md={4}>
                <Social />
              </Grid>
              <Grid className={classes.item} item xs={12} md={4}>
                <Events />
              </Grid>
            </Grid>
          </Container>
        </React.Fragment>
        <div>
          <Typography className={classes.copyright}>
            &#169; 2021 Monday Morning. All rights are reserved. Developed by
            Sambit Sankalp.
          </Typography>
        </div>
      </Paper>
    </div>
  );
}

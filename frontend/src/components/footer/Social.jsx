import React from "react";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "left",
    flexWrap: "wrap",
  },
  footerHeading: {
    color: "#00619b",
  },
  facebook: {
    color: "#a0a0a0",
    cursor: "pointer",
    marginLeft: theme.spacing(1),
    "&:hover": {
      color: "#0f92f3",
    },
  },
  instagram: {
    color: "#a0a0a0",
    cursor: "pointer",
    marginLeft: theme.spacing(1),
    "&:hover": {
      color: "#cf4c67",
    },
  },
  twitter: {
    color: "#a0a0a0",
    cursor: "pointer",
    marginLeft: theme.spacing(1),
    "&:hover": {
      color: "#1da1f2",
    },
  },
  feed: {
    color: "#a0a0a0",
    cursor: "pointer",
    marginLeft: theme.spacing(1),
    "&:hover": {
      color: "#ffcc32",
    },
  },
}));

export default function SocialIcons() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography
          gutterBottom
          className={classes.footerHeading}
          variant="h5"
          component="h5"
          align="left"
        >
          Connect with Us
        </Typography>
        <Grid container direction="row" alignItems="left">
          <FacebookIcon className={classes.facebook} />
          <InstagramIcon className={classes.instagram} />
          <TwitterIcon className={classes.twitter} />
          <RssFeedIcon className={classes.feed} />
        </Grid>
      </Container>
    </React.Fragment>
  );
}

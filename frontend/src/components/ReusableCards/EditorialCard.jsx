import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    maxWidth: 500
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  time: {
    marginLeft: "3%"
  },
  title: {
    fontSize: "17px",
    fontWeight: "bold"
  }
}));

export default function EditorialCard(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={props.img} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography
                  className={classes.title}
                  gutterBottom
                  variant="subtitle1"
                >
                  {props.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  align="left"
                >
                  {props.desc}
                </Typography>
              </Grid>
              <Grid item>
                <CardActions>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

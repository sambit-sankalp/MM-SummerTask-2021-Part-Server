import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { ThemeProvider } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import theme from "../theme";
import ArticleCard from "../ReusableCards/Articlecard";

import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";

import IconButton from "@material-ui/core/IconButton";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { AddCircleOutlineRounded } from "@material-ui/icons";
import articles from "../Constants/Articles.js";

function articleCard(trendingArticle) {
  return (
    <Grid item xs={12} sm={4}>
      <ArticleCard
        img={trendingArticle.imageUrl}
        title={trendingArticle.title}
        desc={trendingArticle.desc}
      />
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  addIcon: {
    margin: "0 auto"
  },
  category: {
    fontSize: "30px",
    margin: theme.spacing(2),
    marginTop: theme.spacing(3)
  }
}));

export default function ArticlesGroup(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  console.log(props.auth);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className={classes.root}>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <ThemeProvider theme={theme}>
            <Typography
              className={classes.category}
              component="div"
              align="left"
              variant="h4"
            >
              {props.category}
            </Typography>

            <Grid container spacing={2}>
              {props.new.map(articleCard)}
            </Grid>
          </ThemeProvider>
        </Container>
      </React.Fragment>

      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              {props.old.map(articleCard)}
              {/* {props.auth ? ( */}
              <Fab
                size="medium"
                color="secondary"
                aria-label="add"
                className={classes.addIcon}
              >
                <AddIcon />
              </Fab>
              {/* ) : (
                <div></div>
              )} */}
            </Grid>
          </Container>
        </React.Fragment>
      </Collapse>
    </div>
  );
}

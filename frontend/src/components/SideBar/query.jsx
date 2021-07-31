import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import theme from "../theme";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    textAlign: "left",
    marginTop: theme.spacing(4),
  },
  media: {
    height: 140,
  },
  avatar: {
    backgroundColor: red[500],
  },
});

export default function ArticleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <Typography gutterBottom variant="h4" component="h4" align="left">
            Write a Query
          </Typography>
        }
      />
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://res.cloudinary.com/sambitsankalp/image/upload/v1627048525/MM%20tasks/Ask_a_Question_vf4vjj.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            align="left"
          >
            If you have any queries and you do not know how to reach the
            authorities - ask a question anonymously and we'll get you your
            answers.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Write a Query
        </Button>
      </CardActions>
    </Card>
  );
}

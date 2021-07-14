import React from "react";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import theme from "./theme";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1)
    }
  },
  button: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

export default function WriteArticles() {
  const classes = useStyles();
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Paper>
          <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
              <ThemeProvider theme={theme}>
                <Typography component="div" align="left" variant="h4">
                  Write a Article
                </Typography>
              </ThemeProvider>
              <form className={classes.root} noValidate autoComplete="off">
                <div>
                  <TextField
                    fullWidth
                    id="outlined-textarea"
                    label="Title "
                    multiline
                    variant="outlined"
                  />
                </div>
                <div>
                  <TextField
                    fullWidth
                    id="outlined-textarea"
                    label="Writer "
                    multiline
                    variant="outlined"
                  />
                </div>
                <div>
                  <TextField
                    fullWidth
                    id="outlined-textarea"
                    label="Body "
                    rows={15}
                    multiline
                    variant="outlined"
                  />
                </div>

                <Grid
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="center"
                  className={classes.button}
                >
                  <Button variant="contained" color="secondary">
                    Cancel
                  </Button>
                  <Button variant="contained" color="primary">
                    Post
                  </Button>
                </Grid>
              </form>
            </Container>
          </React.Fragment>
        </Paper>
      </Container>
    </React.Fragment>
  );
}

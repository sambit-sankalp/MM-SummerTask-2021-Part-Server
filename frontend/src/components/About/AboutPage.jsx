import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Article from "../Article/Article";
import Squiggles from "../SideBar/squiggles";
import Editorial from "../SideBar/editorials";
import Query from "../SideBar/query";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#f3ea41",
    marginTop: theme.spacing(4)
  },
  body: {
    padding: theme.spacing(3)
  },
  side: {
    marginTop: theme.spacing(9)
  }
}));

export default function ArticlePage() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Grid container spacing={0}>
            <Grid item xs={12} md={8}>
              <ThemeProvider theme={theme}>
                <React.Fragment>
                  <CssBaseline />
                  <Container maxWidth="md">
                    <Typography component="div" align="left" variant="h4">
                      About Us
                    </Typography>
                    <Typography component="div" align="left" variant="h6">
                      Who we are and what we do?
                    </Typography>
                    <div className={classes.body}>
                      <Typography component="div" align="left" paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce eu pretium nulla. Nulla semper luctus dictum.
                        Fusce sit amet nisl nec velit fermentum euismod id vitae
                        leo. Maecenas at egestas mi, et rutrum ante. Nullam ante
                        sapien, ultricies varius lacus sit amet, aliquet
                        bibendum justo. Aliquam vulputate, nisl sit amet
                        interdum varius, ligula lectus cursus urna, non lobortis
                        dolor sapien non nibh. Curabitur vehicula enim at tempor
                        convallis. In varius non massa venenatis fringilla.
                        Mauris tempor dignissim ante, id venenatis ligula
                        pulvinar in. Morbi porttitor porta neque id pretium.
                        Praesent condimentum ipsum quis erat aliquam porta.
                        Nullam non dui pretium justo imperdiet interdum et sed
                        ligula. Proin id orci ac metus mollis hendrerit. Nunc
                        nec erat purus. Class aptent taciti sociosqu ad litora
                        torquent per conubia nostra, per inceptos himenaeos.
                        Donec molestie ut nisi non lobortis.
                      </Typography>
                      <Typography component="div" align="left" paragraph>
                        Donec nec metus tincidunt nisi congue placerat quis sed
                        arcu. Nulla facilisi. Donec finibus imperdiet porttitor.
                        Maecenas faucibus velit sit amet nisi pellentesque
                        fermentum. Curabitur dictum enim sit amet egestas
                        gravida. Nunc id venenatis nulla. Proin vehicula nulla
                        eget mattis efficitur.{" "}
                      </Typography>
                      <Typography component="div" align="left" paragraph>
                        Proin nec dictum nisi. Interdum et malesuada fames ac
                        ante ipsum primis in faucibus. Nunc sit amet quam in
                        libero consequat ullamcorper. Nam lacinia ante vitae
                        pellentesque tempus. Class aptent taciti sociosqu ad
                        litora torquent per conubia nostra, per inceptos
                        himenaeos. Morbi lacinia nulla mauris, ut aliquam neque
                        tincidunt in. Nam et viverra nibh. Donec sit amet libero
                        erat. Nulla commodo eros sed sem sodales tincidunt.
                        Nullam id turpis tellus. Phasellus libero dui, feugiat
                        non dui et, dignissim convallis neque. Mauris mollis
                        elementum eros.{" "}
                      </Typography>
                      <Typography component="div" align="left" paragraph>
                        Proin nec dictum nisi. Interdum et malesuada fames ac
                        ante ipsum primis in faucibus. Nunc sit amet quam in
                        libero consequat ullamcorper. Nam lacinia ante vitae
                        pellentesque tempus. Class aptent taciti sociosqu ad
                        litora torquent per conubia nostra, per inceptos
                        himenaeos. Morbi lacinia nulla mauris, ut aliquam neque
                        tincidunt in. Nam et viverra nibh. Donec sit amet libero
                        erat. Nulla commodo eros sed sem sodales tincidunt.
                        Nullam id turpis tellus. Phasellus libero dui, feugiat
                        non dui et, dignissim convallis neque. Mauris mollis
                        elementum eros.{" "}
                      </Typography>
                      <Typography component="div" align="left" paragraph>
                        Proin nec dictum nisi. Interdum et malesuada fames ac
                        ante ipsum primis in faucibus. Nunc sit amet quam in
                        libero consequat ullamcorper. Nam lacinia ante vitae
                        pellentesque tempus. Class aptent taciti sociosqu ad
                        litora torquent per conubia nostra, per inceptos
                        himenaeos. Morbi lacinia nulla mauris, ut aliquam neque
                        tincidunt in. Nam et viverra nibh. Donec sit amet libero
                        erat. Nulla commodo eros sed sem sodales tincidunt.
                        Nullam id turpis tellus. Phasellus libero dui, feugiat
                        non dui et, dignissim convallis neque. Mauris mollis
                        elementum eros.{" "}
                      </Typography>
                      <Typography component="div" align="left" paragraph>
                        Proin nec dictum nisi. Interdum et malesuada fames ac
                        ante ipsum primis in faucibus. Nunc sit amet quam in
                        libero consequat ullamcorper. Nam lacinia ante vitae
                        pellentesque tempus. Class aptent taciti sociosqu ad
                        litora torquent per conubia nostra, per inceptos
                        himenaeos. Morbi lacinia nulla mauris, ut aliquam neque
                        tincidunt in. Nam et viverra nibh. Donec sit amet libero
                        erat. Nulla commodo eros sed sem sodales tincidunt.
                        Nullam id turpis tellus. Phasellus libero dui, feugiat
                        non dui et, dignissim convallis neque. Mauris mollis
                        elementum eros.{" "}
                      </Typography>
                      <Typography component="div" align="left" paragraph>
                        Proin nec dictum nisi. Interdum et malesuada fames ac
                        ante ipsum primis in faucibus. Nunc sit amet quam in
                        libero consequat ullamcorper. Nam lacinia ante vitae
                        pellentesque tempus. Class aptent taciti sociosqu ad
                        litora torquent per conubia nostra, per inceptos
                        himenaeos. Morbi lacinia nulla mauris, ut aliquam neque
                        tincidunt in. Nam et viverra nibh. Donec sit amet libero
                        erat. Nulla commodo eros sed sem sodales tincidunt.
                        Nullam id turpis tellus. Phasellus libero dui, feugiat
                        non dui et, dignissim convallis neque. Mauris mollis
                        elementum eros.{" "}
                      </Typography>
                    </div>
                  </Container>
                </React.Fragment>
              </ThemeProvider>
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

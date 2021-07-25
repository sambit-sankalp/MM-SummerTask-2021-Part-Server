import React from "react";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

export default function About() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography
          gutterBottom
          style={{ color: "#00619b" }}
          variant="h5"
          component="h5"
          align="left"
        >
          About
        </Typography>
        <Typography
          style={{ color: "#a0a0a0", fontSize: "15px" }}
          paragraph
          align="left"
        >
          Monday Morning is the student Media Body of National Institute Of
          Technology Rourkela. Monday Morning covers all the events, issues and
          activities going on inside the campus. Monday morning also serves as a
          link between the administration and the students.
        </Typography>
      </Container>
    </React.Fragment>
  );
}

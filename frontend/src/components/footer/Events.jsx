import React from "react";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

export default function Events() {
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
          Events
        </Typography>
        <Typography
          paragraph
          style={{ color: "#a0a0a0", fontSize: "15px" }}
          align="left"
        >
          No upcoming podcasts.
        </Typography>
        <Button size="small" variant="contained" color="primary">
          Upcoming Podcasts
        </Button>
      </Container>
    </React.Fragment>
  );
}

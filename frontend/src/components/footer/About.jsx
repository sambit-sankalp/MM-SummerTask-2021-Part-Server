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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          viverra, odio vitae aliquet ultrices, est nisl efficitur lectus.
          viverra, odio vitae aliquet ultrices, est nisl efficitur lectus.
          viverra, odio vitae aliquet ultrices.
        </Typography>
      </Container>
    </React.Fragment>
  );
}

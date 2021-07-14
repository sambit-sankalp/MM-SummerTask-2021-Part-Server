import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import mmimage from "./assets/Monday Morning 2.jpg";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <img style={{ width: "100%" }} src={mmimage} alt="picture" />
      </Container>
    </React.Fragment>
  );
}

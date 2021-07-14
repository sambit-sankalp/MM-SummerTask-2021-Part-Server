import React from "react";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import theme from "../theme";

export default function Squiggles() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography
          style={{ fontSize: "30px" }}
          component="div"
          align="left"
          variant="h4"
        >
          Squiggles
        </Typography>
        <Typography
          paragraph
          style={{ marginTop: theme.spacing(2), fontSize: "15px" }}
          align="left"
        >
          The Covid-19 pandemic is not over yet! The country is seeing an
          unprecedented load on the medical infrastructure with a record number
          of new cases every day. Please follow Covid appropriate behaviour and
          stay at home as much as possible!
        </Typography>
      </Container>
    </React.Fragment>
  );
}

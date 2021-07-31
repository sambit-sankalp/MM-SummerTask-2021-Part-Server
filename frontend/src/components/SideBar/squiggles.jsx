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
          Headlines
        </Typography>
        <Typography
          paragraph
          style={{ marginTop: theme.spacing(2), fontSize: "15px" }}
          align="left"
        >
          -Lorem ipsum dolor sit amet, consectetur
          -Lorem ipsum dolor sit amet, consectetur
          -Lorem ipsum dolor sit amet, consectetur
          -Lorem ipsum dolor sit amet, consectetur
          -Lorem ipsum dolor sit amet, consectetur
          -Lorem ipsum dolor sit amet, consectetur
          -Lorem ipsum dolor sit amet, consectetur
          -Lorem ipsum dolor sit amet, consectetur
        </Typography>
      </Container>
    </React.Fragment>
  );
}

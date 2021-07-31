import React from "react";
import Typography from "@material-ui/core/Typography";
import FaceIcon from "@material-ui/icons/Face";
import theme from "../theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

export default function Editorials() {
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
          Your eyes
          <FaceIcon />
        </Typography>
        <Typography
          style={{ marginTop: theme.spacing(2), fontSize: "15px" }}
          paragraph
          align="left"
        >
          Do you have a story, an opinion about a pressing issue of your locality or
          beyond, an observation about the society or the local community
          that you want to be on Newsee, here's your chance!
        </Typography>
        <Typography paragraph align="left">
          Contribute to the editorial section by mailing us at
          <div style={{ fontSize: "16px", fontWeight: "bold" }}>
            editorials@newsee.com
          </div>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

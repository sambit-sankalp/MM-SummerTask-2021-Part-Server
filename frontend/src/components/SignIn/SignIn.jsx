import React from "react";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: "50ch"
  },
  button: {
    "& > *": {
      margin: theme.spacing(2)
    }
  }
}));

export default function SignIn() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    email: "",
    emailRange: "",
    showPassword: false
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="center"
      >
        <Typography className={classes.textField} paragraph>
          If you're an admin, then Sign In otherwise return to the Home by
          clicking the Home Button below.
        </Typography>
        <div>
          <FormControl
            fullWidth
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
            <OutlinedInput
              id="outlined-adornment-email"
              value={values.weight}
              onChange={handleChange("email")}
              endAdornment={
                <InputAdornment position="end">@gmail.com</InputAdornment>
              }
              aria-describedby="outlined-email-helper-text"
              inputProps={{
                "aria-label": "email"
              }}
              labelWidth={40}
            />
          </FormControl>
        </div>
        <div>
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            fullWidth
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
        </div>
        <div className={classes.button}>
          <Button variant="contained" color="primary">
            Home
          </Button>
          <Button variant="contained" color="primary">
            Sign In
          </Button>
        </div>
      </Grid>
    </div>
  );
}

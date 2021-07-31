import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { signin } from "../../actions/userAction";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "50ch",
  },
  button: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
}));

const SignIn = () => {
  const location = useLocation();
  const history = useHistory();

  const classes = useStyles();
  const [values, setValues] = useState({
    amount: "",
    password: "",
    email: "",
    emailRange: "",
    showPassword: false,
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

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(values.email, values.password));
  };

  return (
    <form
      onSubmit={submitHandler}
      noValidate
      autoComplete="off"
      className={classes.root}
    >
      {error && <Alert severity="error">{error}</Alert>}
      {loading && <CircularProgress />}
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="center"
      >
        <div>
          <FormControl
            fullWidth
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
            <OutlinedInput
              id="outlined-adornment-email"
              value={values.email}
              onChange={handleChange("email")}
              endAdornment={
                <InputAdornment position="end">@gmail.com</InputAdornment>
              }
              aria-describedby="outlined-email-helper-text"
              inputProps={{
                "aria-label": "email",
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
          <Button type="submit" variant="contained" color="primary">
            Sign In
          </Button>
        </div>
        <div>
          <Grid direction="Row">
            New User?{" "}
            <Link
              to={redirect ? `/register?redirect=${redirect}` : "/register"}
            >
              Register
            </Link>
          </Grid>
        </div>
      </Grid>
    </form>
  );
};

export default SignIn;

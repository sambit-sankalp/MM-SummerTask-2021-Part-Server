import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { Link, useHistory, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { getUserDetails, updateUser } from "../../actions/userAction";
import { USER_UPDATE_RESET } from "../../constants/userConstants";

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

const UserEditScreen = () => {
  const { userId } = useParams();
  let history = useHistory();
  const classes = useStyles();
  const [message, setMessage] = useState(null);
  const [values, setValues] = React.useState({
    name: "",
    amount: "",
    isAdmin: false,
    email: "",
    emailRange: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleCheckChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.checked });
  };

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userUpdate = useSelector((state) => state.userUpdate);
  const {
    loading: updateLoading,
    error: updateError,
    success: successUpdate,
  } = userUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      history.push("/admin/userlist");
    } else {
      if (!user || !user.name || user._id !== userId) {
        dispatch(getUserDetails(userId));
      } else {
        setValues({
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
        });
      }
    }
  }, [dispatch, user, history, userId, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        _id: userId,
        name: values.name,
        email: values.email,
        isAdmin: values.isAdmin,
      })
    );
  };

  return (
    <form
      className={classes.root}
      onSubmit={submitHandler}
      noValidate
      autoComplete="off"
    >
      {updateLoading && <CircularProgress />}
      {updateError && <Alert severity="error">{updateError}</Alert>}
      {message && <Alert severity="error">{message}</Alert>}
      {error && <Alert severity="error">{error}</Alert>}
      {successUpdate && <Alert severity="success">Updated!!</Alert>}
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <Grid
          container
          direction="column"
          justify="space-evenly"
          alignItems="center"
        >
          <Typography component="div" align="left" variant="h4">
            User Details
          </Typography>
          <div>
            <FormControl
              fullWidth
              className={clsx(classes.margin, classes.textField)}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-name">Name</InputLabel>
              <OutlinedInput
                id="outlined-adornment-name"
                value={values.name}
                onChange={handleChange("name")}
                aria-describedby="outlined-name-helper-text"
                inputProps={{
                  "aria-label": "name",
                }}
                labelWidth={40}
              />
            </FormControl>
          </div>
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
                aria-describedby="outlined-email-helper-text"
                inputProps={{
                  "aria-label": "email",
                }}
                labelWidth={40}
              />
            </FormControl>
          </div>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.isAdmin}
                  onChange={handleCheckChange}
                  name="isAdmin"
                  color="primary"
                />
              }
              label="isAdmin"
            />
          </FormGroup>
          <div className={classes.button}>
            <Button variant="contained" color="primary" type="submit">
              Update
            </Button>
          </div>
        </Grid>
      )}
    </form>
  );
};

export default UserEditScreen;

import React, {useState, useEffect} from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Grid from "@material-ui/core/Grid";
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { getUserDetails, updateUserProfile } from '../../actions/userAction';

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

export default function SignUp({ location, history }) {
  const classes = useStyles();
  const [message, setMessage] = useState(null)
  const [values, setValues] = React.useState({
    name: "",
    amount: "",
    password: "",
    confirmPassword: "",
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

  const dispatch = useDispatch()

  const userDetails =  useSelector(state => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin =  useSelector(state => state.userLogin)
  const {  userInfo } = userLogin

  const userUpdateProfile =  useSelector(state => state.userUpdateProfile)
  const {  success } = userUpdateProfile

  useEffect(() => {
      if(!userInfo)
      {
          history.push('/signin')
      }
      else{
          if(!user.name)
          {
            dispatch(getUserDetails('profile'))
          }
          else{
              setValues({
                  name: user.name,
                  email: user.email
              })
          }
      }
  }, [dispatch,history,userInfo,user])

  const submitHandler = (e) => {
      e.preventDefault()
      if(values.password != values.confirmPassword)
      {
        setMessage("Password do not match")
      }
      else{
        dispatch(updateUserProfile({ id: user._id, name , email, password}))
      }
      
  }

  return (
    <form className={classes.root} onSubmit={submitHandler} noValidate autoComplete="off">
      {message && <Alert severity="error">{message}</Alert>}
      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">Updated!!</Alert>}
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
            <InputLabel htmlFor="outlined-adornment-email">Name</InputLabel>
            <OutlinedInput
              id="outlined-adornment-name"
              value={values.name}
              onChange={handleChange("name")}
              aria-describedby="outlined-name-helper-text"
              inputProps={{
                "aria-label": "name"
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
              onChange={handleChange("email")
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
        <div>
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            fullWidth
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Confirm Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.confirmPassword}
              onChange={handleChange("confirmPassword")}
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
            Update
          </Button>
        </div>
      </Grid>
    </form>
  );
}
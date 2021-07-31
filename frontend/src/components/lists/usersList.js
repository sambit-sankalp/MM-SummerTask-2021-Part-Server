import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { green, red } from "@material-ui/core/colors";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";
import CheckIcon from "@material-ui/icons/Check";
import Fab from "@material-ui/core/Fab";
import ClearIcon from "@material-ui/icons/Clear";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { userLists, deleteUser } from "../../actions/userAction";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
}));

const UserList = () => {
  const classes = useStyles();
  let history = useHistory();

  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector((state) => state.userDelete);
  const { success } = userDelete;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(userLists());
      dispatch(deleteUser());
    } else {
      history.pushState("/signin");
    }
  }, [dispatch, history, userInfo, success]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <div>
      <h1>Users</h1>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <h3>
          <Alert severity="error">{error}</Alert>
        </h3>
      ) : (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Email</StyledTableCell>
                <StyledTableCell align="right">Admin</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <StyledTableRow key={user._id}>
                  <StyledTableCell>{user._id}</StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {user.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{user.email}</StyledTableCell>
                  <StyledTableCell align="right">
                    {user.isAdmin ? (
                      <CheckIcon style={{ color: green[500] }} />
                    ) : (
                      <ClearIcon style={{ color: red[500] }} />
                    )}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Link to={`/admin/user/${user._id}/edit`}>
                      <Fab color="secondary" aria-label="edit">
                        <EditIcon />
                      </Fab>
                    </Link>
                    <Fab
                      color="secondary"
                      aria-label="delete"
                      onClick={() => deleteHandler(user._id)}
                    >
                      <DeleteIcon />
                    </Fab>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default UserList;

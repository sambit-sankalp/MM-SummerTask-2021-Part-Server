import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./styledElements";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import SearchBox from "./SearchBox";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";
import { logout } from "../../actions/userAction";

const Navbar = () => {
  let history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElAdmin, setAnchorElAdmin] = useState(null);

  const open = Boolean(anchorEl);
  const openAdmin = Boolean(anchorElAdmin);

  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickAdmin = (event) => {
    setAnchorElAdmin(event.currentTarget);
  };

  const handleCloseAdmin = () => {
    setAnchorElAdmin(null);
  };

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/articles" activeStyle>
            Articles
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
        </NavMenu>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Route render={() => <SearchBox history={history} />} />
          {userInfo && userInfo.isAdmin && (
            <div>
              <Button
                aria-controls="fade-admin"
                aria-haspopup="true"
                onClick={handleClickAdmin}
              >
                Users
              </Button>
              <Menu
                id="fade-admin"
                anchorEl={anchorElAdmin}
                keepMounted
                open={openAdmin}
                onClose={handleCloseAdmin}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleCloseAdmin}>
                  <Link to="/admin/userlist"> Users</Link>
                </MenuItem>
                <MenuItem onClick={handleCloseAdmin}>
                  <Link to="/admin/articlelist"> Articles</Link>
                </MenuItem>
              </Menu>
            </div>
          )}
          {userInfo ? (
            <div>
              <Button
                aria-controls="fade-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                {userInfo.name}
              </Button>
              <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleClose}>
                  <Link to="/profile"> Profile</Link>
                </MenuItem>
                <MenuItem onClick={logoutHandler}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <NavBtn>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
          )}
        </Grid>
      </Nav>
    </>
  );
};

export default Navbar;

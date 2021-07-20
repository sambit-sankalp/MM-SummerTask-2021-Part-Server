import React, {useState} from 'react';
import { Route } from 'react-router-dom';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './styledElements';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import SearchBox from './SearchBox';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { logout } from '../../actions/userAction';


  
const Navbar = ({ history }) => {
  
  const [anchorEl, setAnchorEl] = useState(null);
  
  const open = Boolean(anchorEl);

  const dispatch = useDispatch()
  

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }


  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/articles' activeStyle>
            Articles
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <Route render={({ history }) => (
            <SearchBox history={history} />
          )} />
        </NavMenu>
        {userInfo? (
          <div>
            <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
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
        ) : 
        
        <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      }
      {userInfo && userInfo.isAdmin && (
        <div>
          <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
            Users
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
              <Link to="/admin/userlist"> Users</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/admin/productlist"> Products</Link>
            </MenuItem>
          </Menu>
         </div>
      )}  
      </Nav>
    </>
  );
};
  
export default Navbar;
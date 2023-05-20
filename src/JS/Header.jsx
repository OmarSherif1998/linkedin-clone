import React from 'react';
import '../CSS/Header.css';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { auth } from '../Firebase';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import Headeroptions from './Headeroptions';

function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img src={require('../images/linkedin.png')} alt="linkedin logo" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <Headeroptions Icon={HomeIcon} title=" Home" />
        <Headeroptions Icon={SupervisorAccountIcon} title=" My Network" />
        <Headeroptions Icon={BusinessCenterIcon} title=" Jobs" />
        <Headeroptions Icon={ChatIcon} title=" Messaging" />
        <Headeroptions Icon={NotificationsIcon} title="  Notifications" />
        <Headeroptions avatar={true} title="  Me" onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;

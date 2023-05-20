import React from 'react';
import '../CSS/LHeader.css';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { auth } from '../Firebase';
import Headeroptions from './Headeroptions';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SchoolIcon from '@mui/icons-material/School';

function LHeader() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img src={require('../images/linkedin.png')} alt="" />
      </div>
      <div className="header__right">
        <Headeroptions Icon={NewspaperIcon} title=" Article" />
        <Headeroptions Icon={PeopleAltIcon} title=" People" />
        <Headeroptions Icon={SchoolIcon} title=" Learning" />
        <Headeroptions Icon={SupervisorAccountIcon} title=" JJobs" />
        <div id="vl"></div>
        <button className="lBtn">Join now</button>
        <button className="rBtn">Sign In</button>
      </div>
    </div>
  );
}

export default LHeader;

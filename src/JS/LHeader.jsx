import React from 'react';
import '../CSS/LHeader.css';

import Headeroptions from './Headeroptions';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SchoolIcon from '@mui/icons-material/School';

function LHeader() {
  return (
    <div className="header">
      <div className="header_left">
        <img src={require('../images/linkedin.png')} alt="" />
      </div>
      <div className="header__right">
        <Headeroptions Icon={NewspaperIcon} title=" Article" />
        <Headeroptions Icon={PeopleAltIcon} title=" People" />
        <Headeroptions Icon={SchoolIcon} title=" Learning" />
        <Headeroptions Icon={SupervisorAccountIcon} title=" Jobs" />
        <div id="vl"></div>
        <button className="lBtn">Join now</button>
        <button className="rBtn">Sign In</button>
      </div>
    </div>
  );
}

export default LHeader;

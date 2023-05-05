import React from 'react';
import './Sidebar.css';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {
  const recentitems = (topics) => (
    <div className="sidebar__recentItems">
      <span className="sidebar__hash">#</span>
      <p>{topics}</p>
    </div>
  );
  const user = useSelector(selectUser);
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://scx1.b-cdn.net/csz/news/800/2017/theoreticala.jpg"
          alt=""
        />
        <Avatar src={user.photoURL} className="sidebar__avatar">
          {user.displayName[0]}
        </Avatar>
        <h2> {user.displayName} </h2>
        <h4> {user.email} </h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p> Who viewed your profile </p>
          <p className="sidebar__statNumber"> 2581 </p>
        </div>
        <div className="sidebar__stat">
          <p> Views on posts </p> <p className="sidebar__statNumber"> 2367 </p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p> Recent </p>
        {recentitems('reactJS')}
        {recentitems('Programming')}
        {recentitems('ChatGPT')}
        {recentitems('NextJS')}
        {recentitems('AngularJS')}
      </div>
    </div>
  );
}

export default Sidebar;

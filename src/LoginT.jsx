import React, { useState } from 'react';
import './LoginT.css';
import { auth } from './Firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePic, setprofilePic] = useState('');
  const disptach = useDispatch();
  const register = () => {
    if (!name) {
      return alert('Please enter your name');
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            disptach(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        disptach(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            proileURL: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="container">
      {/* <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/291px-LinkedIn_Logo.svg.png?20170711102837 "
        alt=""
      /> */}
      <div className="heading">
        <h1>Welcome to your professional community</h1>
      </div>

      <div className="login">
        <form action="">
          <p>E-mail</p>
          <input
            type="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
          />
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit" onClick={loginToApp}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;

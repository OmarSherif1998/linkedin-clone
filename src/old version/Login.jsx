import React, { useState } from 'react';
import '../CSS/LoginT.css';
import { auth } from '../Firebase';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

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
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/291px-LinkedIn_Logo.svg.png?20170711102837 "
        alt=""
      />
      <form action="">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (Required if registring)"
        />
        <input
          type="text"
          value={profilePic}
          onChange={(e) => setprofilePic(e.target.value)}
          placeholder="profile picture URL (OPTIONAL)"
        />
        <input
          type="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In{' '}
        </button>{' '}
      </form>{' '}
      <p>
        not a member ? {'  '}{' '}
        <span className="login__register" onClick={register}>
          Register Now{' '}
        </span>{' '}
      </p>{' '}
    </div>
  );
}

export default Login;

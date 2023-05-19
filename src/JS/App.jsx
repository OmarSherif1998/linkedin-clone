import '../CSS/App.css';
import Login from '../JS/Login';
import LoginT from '../JS/LoginT';
import Feed from '../JS/Feed';
import Header from '../JS/Header';
import Sidebar from '../JS/Sidebar';
import Widgets from '../JS/Widgets';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from '../features/userSlice';
import { useEffect } from 'react';
import { auth } from '../Firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="app">
      <Header />
      {!user ? (
        <LoginT />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}
export default App;

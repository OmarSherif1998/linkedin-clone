import React, { useState, useEffect } from 'react';
import '../CSS/LoginT.css';
import { auth } from '../Firebase';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import InputOption from './InputOption';
function Login() {
  // const [name, setName] = useState('');
  // const [profilePic, setprofilePic] = useState('');
  // const register = () => {
  //   if (!name) {
  //     return alert('Please enter your name');
  //   }

  //   auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((userAuth) => {
  //       userAuth.user
  //         .updateProfile({
  //           displayName: name,
  //           photoURL: profilePic,
  //         })
  //         .then(() => {
  //           disptach(
  //             login({
  //               email: userAuth.user.email,
  //               uid: userAuth.user.uid,
  //               displayName: name,
  //               photoURL: profilePic,
  //             })
  //           );
  //         });
  //     })
  //     .catch((error) => alert(error));
  // };
  const CarouselItems = [
    {
      header: 'Let the right people know you’re open to work',
      paragraph:
        'With the Open To Work feature, you can privately tell recruiters or publicly share with the LinkedIn community that you are looking for new job opportunities.',
      image: require('../images/person.png'),
    },
    {
      header: 'Conversations tpday could lead to opportunity tomorrow',
      paragraph:
        'Sending messages to people you know is a great way to strengthen relationships as you take the next step in your career.',

      image: require('../images/person1.png'),
    },
    {
      header: 'Stay up to date on your industry',
      paragraph:
        'From live videos, to stories, to newsletters and more, LinkedIn is full of ways to stay up to date on the latest discussions in your industry.',
      image: require('../images/person2.png'),
    },
  ];
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const disptach = useDispatch();
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
  const [counter, setCounter] = useState(0);
  const updateCount = (x) => {
    if (x === 'next' && counter < 2) {
      setCounter(counter + 1);
    } else if (x === 'prev' && counter < 0) {
      setCounter(counter - 1);
    } else {
      setCounter(0);
    }
  };

  useEffect(() => {
    setCounter(0);
  }, []);

  return (
    <div className="container">
      <div className="container1">
        <div className="heading">
          <h1>Welcome to your professional community</h1>
        </div>
        <div className="formContainer">
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
              <div className="fPass">
                <p>Forgot password?</p>
              </div>

              <button type="submit" onClick={loginToApp}>
                Sign In
              </button>

              <div className="text-divider">or</div>
            </form>
            <div className="extraBtn">
              <button>Sign in with Google</button>
              <button>New to LinkedIn? Join now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container2">
        <img
          className="imge"
          src="https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
          alt=""
        />
      </div>
      <div className="container3">
        <div className="section1">
          <h1>Find the right job or internship for you</h1>
        </div>

        <div className="section2">
          <h4>SUGGESTED SEARCHES</h4>
          <div className="flexBtns">
            <button>Engineering</button>
            <button>Bussiness Development</button>
            <button>Finance</button>
            <button>Adminstative Assistant</button>
            <button>Retail Associate</button>
            <button>Customer Service</button>
            <button>Operations</button>
            <button>Information technology</button>
            <button>Marketing</button>
            <button>Human Resources</button>
            <button>Show more</button>
          </div>
        </div>
      </div>
      <div className="container4">
        <h1>Post your job for millions of people to see</h1>
        <button>post a job</button>
      </div>
      <div className="container5">
        <button onClick={() => updateCount('prev')} className="arrow">
          <InputOption Icon={ArrowBackIosNewIcon} />
        </button>

        <div className="textCont">
          <h2>{CarouselItems[counter].header}</h2>
          <span>
            <p>{CarouselItems[counter].paragraph}</p>
          </span>
        </div>
        <div className="personImg">
          <img src={CarouselItems[counter].image} alt="" />
        </div>
        <button onClick={() => updateCount('next')} className="arrow">
          <InputOption Icon={ArrowForwardIosIcon} />
        </button>
      </div>
      <div className="container6">
        <div className="leftSection">
          <img src={require('../images/couch.png')} alt="couch.png" />
          <h1>Connect with people who can help</h1>
          <button>Find people you know </button>
        </div>

        <div className="rightSection">
          <img src={require('../images/desk.png')} alt="desk.png" />
          <h1>Learn the skills you need to succeed</h1>
          <div className="dropdown">
            <button>Choose a topic to learn about</button>
            <div className="dropdown-content">
              <p>link</p>
              <p>link</p>
              <p>link</p>
              <p>link</p>
              <p>link</p>
              <p>link</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container7">
        <div className="c7left">
          <h1>Who is LinkedIn for?</h1>
          <h1>Anyone looking to navigate their professional life.</h1>
          <div className="btnSection">
            <button>
              Find a wroker or classmate{' '}
              <InputOption Icon={ArrowForwardIosIcon} />
            </button>
            <button>
              Find a new job
              <InputOption Icon={ArrowForwardIosIcon} />
            </button>
            <button>
              Find a course or training
              <InputOption Icon={ArrowForwardIosIcon} />
            </button>
          </div>
        </div>
        <div className="c7right">
          <img src={require('../images/person3.jpg')} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Login;

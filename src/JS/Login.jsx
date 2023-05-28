import React, { useState, useEffect } from 'react';
import '../CSS/Login.css';
import { auth } from '../Firebase';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CopyrightIcon from '@mui/icons-material/Copyright';
import InputOption from './InputOption';

function Login() {
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
  const [name, setName] = useState('');
  const [profilePic, setprofilePic] = useState('');
  const disptach = useDispatch();
  const register = (e) => {
    e.preventDefault();
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
            console.log(name);
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

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name (Required)"
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
              <div className="signBtns">
                <button type="submit" onClick={loginToApp}>
                  Sign in
                </button>
                <button type="submit" onClick={register}>
                  Sign up
                </button>
              </div>
            </form>
            <div className="text-divider">or</div>
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
              <p>Business Analysis and Strategy</p>
              <p>Business Software and Tools</p>
              <p>Career Development</p>
              <p>Web Design</p>
              <p>Network and System Administration</p>
              <p>Motion Graphics and VFX</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container7">
        <div className="c7left">
          <div className="c7heading">
            <h1>Who is LinkedIn for?</h1>
            <h2>Anyone looking to navigate their professional life.</h2>
          </div>
          <div className="btnSection">
            <button>
              <p>Find a wroker or classmate</p>
              <InputOption Icon={ArrowForwardIosIcon} />
            </button>
            <button>
              <p>Find a new job</p>
              <InputOption Icon={ArrowForwardIosIcon} />
            </button>
            <button>
              <p>Find a course or training</p>
              <InputOption Icon={ArrowForwardIosIcon} />
            </button>
          </div>
        </div>
        <div className="c7right">
          <img src={require('../images/person3.jpg')} alt="" />
        </div>
      </div>
      <div className="container8">
        <h1>Join your colleagues, classmates, and friends on LinkedIn.</h1>
        <button>Get started</button>
      </div>
      <div className="footer">
        <div className="list">
          <div className="col1">
            <ul className="listColumns">
              <li className="listItem">
                <img src={require('../images/linkedin.png')} alt="" />
              </li>
            </ul>
          </div>
          <div className="col2">
            <ul className="listColumns">
              <li className="listHeader">General</li>
              <li className="listItem">Sign Up</li>
              <li className="listItem">Help Center</li>
              <li className="listItem">About</li>
              <li className="listItem">Press</li>
              <li className="listItem">Blog</li>
              <li className="listItem">Careers</li>
              <li className="listItem">Developers</li>
            </ul>
          </div>
          <div className="col3">
            <ul className="listColumns">
              <li className="listHeader">Browse LinkedIn</li>
              <li className="listItem">Learning</li>
              <li className="listItem">Jobs</li>
              <li className="listItem">Salary</li>
              <li className="listItem">Mobile</li>
              <li className="listItem">Services</li>
              <li className="listItem">Products</li>
            </ul>
          </div>
          <div className="col4">
            <ul className="listColumns">
              <li className="listHeader">Business Solutions</li>
              <li className="listItem">Talent</li>
              <li className="listItem">Marketing</li>
              <li className="listItem">Sales</li>
              <li className="listItem">Learning</li>
            </ul>
          </div>
          <div className="col5">
            <ul className="listColumns">
              <li className="listHeader">Members</li>
              <li className="listItem">Jobs</li>
              <li className="listItem">Companies</li>
              <li className="listItem">Featured</li>
              <li className="listItem">Learning</li>
              <li className="listItem">Posts</li>
              <li className="listItem">Articles</li>
              <li className="listItem">Schools</li>
              <li className="listItem">News</li>
              <li className="listItem">Newsletter</li>
              <li className="listItem">Services</li>
              <li className="listItem">Products</li>
              <li className="listItem">Advice</li>
              <li className="listItem">People Search</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="subFooter">
        <ul className="subfooterlist">
          <li>
            <img src={require('../images/linkedin - black.png')} alt="" />
          </li>
          <li>
            <div className="footerText1">
              <InputOption Icon={CopyrightIcon} />
            </div>
          </li>
          <li>2023</li>
          <li>About</li>
          <li>Accessibility</li>
          <li>User Agreement</li>
          <li>Privacy Policy</li>
          <li>Copyright Policy</li>
          <li> Cookie Policy</li>
          <li>Brand Policy</li>
          <li>Guest controls</li>
          <li>Community Guidlines</li>
          <li>Language</li>
          <li>
            <div className="footerText2">
              <InputOption Icon={KeyboardArrowDownIcon} />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Login;

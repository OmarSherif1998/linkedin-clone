import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAHeKek_QwUKRPabDoZ2GL1rvT8o2NIZGE',
    authDomain: 'linkedin-clone-cbcb1.firebaseapp.com',
    projectId: 'linkedin-clone-cbcb1',
    storageBucket: 'linkedin-clone-cbcb1.appspot.com',
    messagingSenderId: '23848230868',
    appId: '1:23848230868:web:a369de076291f25f270041',
    measurementId: 'G-BDN4T1M77F',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

// eslint-disable-next-line import/no-anonymous-default-export
export { db, auth };
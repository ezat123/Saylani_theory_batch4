import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "https://react-sample-17caa.firebaseio.com",
  storageBucket: "react-sample-17caa.appspot.com",
  messagingSenderId: ""
};
firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDosLpcuouu3iJeyPKg2x5MqIGkwEIAgCo",
  authDomain: "fire-chat-react-7c5f1.firebaseapp.com",
  projectId: "fire-chat-react-7c5f1",
  storageBucket: "fire-chat-react-7c5f1.appspot.com",
  messagingSenderId: "110506181433",
  appId: "1:110506181433:web:383bc7824ac9a220a15ee8",
  measurementId: "G-3EBE7ZSL69"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

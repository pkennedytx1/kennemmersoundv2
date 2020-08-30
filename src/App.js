import React from 'react';
import Routes from './routes';
import "animate.css/animate.min.css";
import { ToastContainer } from 'react-toastify';
import { firebaseConfig } from './firebaseConfig';
import firebase from 'firebase';

firebase.initializeApp(firebaseConfig);
firebase.analytics();

function App() {
  return (
    <>
      <ToastContainer />
      <Routes />
    </>
  );
}

export default App;

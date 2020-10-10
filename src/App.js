import React from 'react';
import Routes from './routes';
import { BrowserRouter as Router} from 'react-router-dom';
import "animate.css/animate.min.css";
import { ToastContainer } from 'react-toastify';
import { firebaseConfig } from './firebaseConfig';
import firebase from 'firebase';
import Footer from './components/Footer';
import './app.css'

firebase.initializeApp(firebaseConfig);
firebase.analytics();

function App() {
  return (
    <div className='site'>
      <Router>
        <div className='site-content'>
          <ToastContainer />
          <Routes />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

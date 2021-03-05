import React from 'react';
import Routes from './routes';
import { BrowserRouter as Router} from 'react-router-dom';
import "animate.css/animate.min.css";
import { ToastContainer } from 'react-toastify';
import { firebaseConfig } from './firebaseConfig';
import { Link } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'
import firebase from 'firebase';
import Footer from './components/Footer';
import './app.css'

firebase.initializeApp(firebaseConfig);
firebase.analytics();

function App() {
  return (
    <div className='site'>
      <Router>
        <ScrollToTop>
        <div className='site-content'>
          <ToastContainer />
          <Routes />
        </div>
        <Footer />
        <Link to='/contact'>
          <div className="site-button">
            <h3><i class="bi bi-chat"></i></h3>
          </div>
        </Link>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;

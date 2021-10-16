import React from 'react';
import Routes from './routes';
import { BrowserRouter as Router} from 'react-router-dom';
import "animate.css/animate.min.css";
import { ToastContainer } from 'react-toastify';
import { firebaseConfig } from './firebaseConfig';
import { Link } from 'react-router-dom';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import ScrollToTop from './components/ScrollToTop'
import firebase from 'firebase/app';
import 'firebase/app-check';
import Footer from './components/Footer';
import './app.css'

firebase.initializeApp(firebaseConfig);

const appCheck = firebase.appCheck();
appCheck.activate(
  '9WQILJVcQrsBKKXIhaS7',
  true
  );
firebase.analytics();

function App() {
  const renderTooltip = (props) => (
    <Tooltip className='contact-site' id="contact-site" {...props}>
      <h4 className='contact-site-text'>Contact Joe</h4>
    </Tooltip>
  );
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
          <OverlayTrigger
            placement="left"
            delay={{ show: 0, hide: 0 }}
            overlay={renderTooltip}
          >
          <div className="site-button">
            <img className='contact-site-logo' alt='jk logo' src="J! Logo.png" width="40" heigh="40" />
            {/* <h3><i class="bi bi-chat"></i></h3> */}
          </div>
          </OverlayTrigger>
        </Link>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;

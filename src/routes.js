import React from 'react';
import { Route } from 'react-router-dom';
import Navagation from './components/Navagation';
import LandingPage from './components/landingpage'
import AboutMe from './components/AboutMe';
import Testimonial from './components/Testimonial'
import ContactMe from './components/ContactMe';
import Reel from './components/Reel'
import Admin from './components/Admin'
import Projects from './containers/Projects';

export default function Routes() {
    return(
        <>
            <Navagation />
            <Route exact path='/'>
                <LandingPage />
            </Route>
            <Route exact path='/about'>
                <AboutMe />
            </Route>
            <Route exact path='/testimonials'>
                <Testimonial />
            </Route>
            <Route exact path='/contact'>
                <ContactMe />
            </Route>
            <Route exact path='/reel'>
                <Reel />
            </Route>
            <Route exact path='/projects'>
                <Projects />
            </Route>
            <Route exact path='/admin'>
                <Admin />
            </Route>
        </>
    )
}


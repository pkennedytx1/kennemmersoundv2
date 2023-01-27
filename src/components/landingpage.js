import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import './landing.css';

export default function LandingPage() {
    return(
        <>
        <div className='web-tablet-landingpage'>
            <ScrollAnimation animateOnce={true} animateIn='fadeIn'>
                <div className="logobox">
                    <img alt='Kennemmer Sound Design Logo'src="J! Logo.png" width="125" heigh="125" />
                </div>
            </ScrollAnimation>
            <div className="content wrapper">
                <div className="jumbotron">
                    <ScrollAnimation animateOnce={true} delay={200} animateIn='fadeIn'>
                        <h1 className="display-4">Sound Supervision</h1>
                    </ScrollAnimation>
                    <div className='subtext-container'>
                    <ScrollAnimation animateOnce={true} className='subtext-part-two' delay={400} animateIn='fadeIn'>
                        <div id="str"><p id='after'>Let's make your audience feel your story.</p></div>
                    </ScrollAnimation>
                    </div>
                </div>
                <ScrollAnimation animateOnce={true} delay={1100} animateIn='fadeIn'>
                    <div className="buts">
                        <Link to="/projects" id="projects" className="btn btn-outline-light" href="projects.html" role="button"><i className="fas fa-circle"></i> My Projects</Link>
                        <Link to='/reel' id="reelbut" className="btn btn-outline-light reel-btn" role="button"><i className="fas fa-play"></i> View Reel</Link>
                    </div>
                </ScrollAnimation>
            </div>
        <br /><br />
        </div>
        <div className='mobile-landingpage'>
        <br />
        <div className="logobox">
            <img alt='Kennemmer Sound Design Logo'src="J! Logo.png" width="125" heigh="125" />
        </div>
        <div className="content wrapper">
            <div className="jumbotron">
                    <h1 className="display-4">Sound Supervision</h1>
                <div className='subtext-container'>
                    <div id="str"><p id='after'>Let's make your audience feel your story.</p></div>
                </div>
                <br />
            </div>
            <div className="buts">
                <Link to="/projects" id="projects" className="btn btn-outline-light" href="projects.html" role="button"><i className="fas fa-circle"></i> My Projects</Link>
                <Link to='/reel' id="reelbut" className="btn btn-outline-light reel-btn" role="button"><i className="fas fa-play"></i> View Reel</Link>
            </div>
        </div>
        <br /><br />
        </div>
    </>
    )
}
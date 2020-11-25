import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactTypingEffect from 'react-typing-effect';
import ScrollAnimation from 'react-animate-on-scroll';
import Banner from './Banner';
import './landing.css';

export default function LandingPage() {
    const [displaySubText, setDisplaySubText] = useState(true)
    setTimeout(function(){
        setDisplaySubText(false)
    }, 8200)
    return(
        <>
        <Banner />
        <div className='web-tablet-landingpage'>
            <ScrollAnimation animateOnce={true} animateIn='fadeIn'>
                <div className="logobox">
                    <img alt='Kennemmer Sound Design Logo'src="J! Logo.png" width="125" heigh="125" />
                </div>
            </ScrollAnimation>
            <div className="content wrapper">
                <div className="jumbotron">
                    <ScrollAnimation animateOnce={true} delay={300} animateIn='fadeIn'>
                        <h1 className="display-4">Sound Design & Re-Recording Mixing</h1>
                    </ScrollAnimation>
                    <div className='subtext-container'>
                    <ScrollAnimation animateOnce={true} delay={400} animateIn='fadeIn'>
                        <ReactTypingEffect className={displaySubText?'subtext-part-one':' subtext-part-one fadeOut'} id='str'
                            typingDelay="800"
                            cursor=''
                            speed="70"
                            text="Sound is the puppet master of emotion. Let's make your audience feel your story."
                        />

                    </ScrollAnimation>
                        <ScrollAnimation animateOnce={true} className='subtext-part-two' delay={8300} animateIn='fadeIn'>
                            <div id="str"><p id='after'>Sound is the puppet master of emotion. Let's make your audience feel your story.</p></div>
                        </ScrollAnimation>
                    </div>
                </div>
                <div className='social-media'>
                <ScrollAnimation animateOnce={true} delay={8700} animateIn='fadeIn'>
                    <a rel="noopener noreferrer" target='_blank' href='https://www.linkedin.com/in/josephkennemer/' className='social-media-button'><i className="fab fa-linkedin"></i></a>
                </ScrollAnimation>
                <ScrollAnimation animateOnce={true} delay={8900} animateIn='fadeIn'>
                    <a rel="noopener noreferrer" target='_blank' href='https://twitter.com/joseph_kennemer' className='social-media-button'><i className="fab fa-twitter-square"></i></a>
                </ScrollAnimation>
                <ScrollAnimation animateOnce={true} delay={9000} animateIn='fadeIn'>
                    <a rel="noopener noreferrer" target='_blank' href='https://www.instagram.com/joseph.kennemer/?hl=en'className='social-media-button'><i className="fab fa-instagram"></i></a>
                </ScrollAnimation>
                </div>

                <br /><br />
                <ScrollAnimation animateOnce={true} delay={9500} animateIn='fadeIn'>
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
                    <h1 className="display-4">Sound Design & Re-Recording Mixing</h1>
                <div className='subtext-container'>
                    <div id="str"><p id='after'>Sound is the puppet master of emotion. Let's make your audience feel your story.</p></div>
                </div>
                <br />
            </div>
            <div className='social-media'>
                <a rel="noopener noreferrer" target='_blank' href='https://www.linkedin.com/in/josephkennemer/' className='social-media-button'><i className="fab fa-linkedin"></i></a>
                <a rel="noopener noreferrer" target='_blank' href='https://twitter.com/joseph_kennemer' className='social-media-button'><i className="fab fa-twitter-square"></i></a>
                <a rel="noopener noreferrer" target='_blank' href='https://www.instagram.com/joseph.kennemer/?hl=en'className='social-media-button'><i className="fab fa-instagram"></i></a>
            </div>
            <br /><br />
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
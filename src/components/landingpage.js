import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactTypingEffect from 'react-typing-effect';
import ScrollAnimation from 'react-animate-on-scroll';
import './landing.css';

export default function LandingPage() {
    const [displaySubText, setDisplaySubText] = useState(true)
    setTimeout(function(){
        setDisplaySubText(false)
    }, 8200)
    console.log(displaySubText)
    return(
        <>
        <ScrollAnimation animateOnce={true} animateIn='fadeIn'>
            <div class="logobox">
                <img alt='Kennemmer Sound Design Logo'src="J! Logo.png" width="125" heigh="125" />
            </div>
        </ScrollAnimation>
        <div class="content">
            <div class="jumbotron">
                <ScrollAnimation animateOnce={true} delay='300' animateIn='fadeIn'>
                    <h1 class="display-4">Sound Design & Re-Recording Mixing</h1>
                </ScrollAnimation>
                <div className='subtext-container'>
                <ScrollAnimation animateOnce={true} delay='400' animateIn='fadeIn'>
                    <ReactTypingEffect className={displaySubText?'subtext-part-one':' subtext-part-one fadeOut'} id='str'
                        typingDelay="800"
                        cursor=''
                        speed="70"
                        text="Sound is the puppet master of emotion. Let's make your audience feel your story."
                    />

                </ScrollAnimation>
                    <ScrollAnimation animateOnce={true} className='subtext-part-two' delay='8500' animateIn='fadeIn'>
                        <div id="str"><p id='after'>Sound is the puppet master of emotion. Let's make your audience feel your story.</p></div>
                    </ScrollAnimation>
                </div>
            </div>
            <div className='social-media'>
            <ScrollAnimation animateOnce={true} delay='8700' animateIn='fadeIn'>
                <a rel="noopener noreferrer" target='_blank' href='https://www.linkedin.com/in/josephkennemer/' className='social-media-button'><i class="fab fa-linkedin"></i></a>
            </ScrollAnimation>
            <ScrollAnimation animateOnce={true} delay='8900' animateIn='fadeIn'>
                <a rel="noopener noreferrer" target='_blank' href='https://twitter.com/joseph_kennemer' className='social-media-button'><i class="fab fa-twitter-square"></i></a>
            </ScrollAnimation>
            <ScrollAnimation animateOnce={true} delay='9000' animateIn='fadeIn'>
                <a rel="noopener noreferrer" target='_blank' href='https://www.instagram.com/joseph.kennemer/?hl=en'className='social-media-button'><i class="fab fa-instagram"></i></a>
            </ScrollAnimation>
            </div>

            <br /><br />
            <ScrollAnimation animateOnce={true} delay='9500' animateIn='fadeIn'>
                <div class="buts">
                    <Link to="/projects" id="reelbut" class="btn btn-outline-light" href="projects.html" role="button"><i class="fas fa-circle"></i> My Projects</Link>
                    <Link to='/reel' id="reelbut" class="btn btn-outline-light reel-btn" role="button"><i class="fas fa-play"></i> Veiw Reel</Link>
                </div>
            </ScrollAnimation>


    
        {/* <a  id="close" class="btn btn-outline-light" role="button"><i class="fas fa-times"></i>&nbsp&nbspClose Video</a> */}
        


    </div>
    <br /><br />
    <footer class="footer">
        <p id="landingquote">“The role of sound is really exactly what the role of every other aspect of filmmaking is, and that is to tell stories.”<br/>-Mark Mangini<br/><br/></p>
    </footer>
     </>
    )
}
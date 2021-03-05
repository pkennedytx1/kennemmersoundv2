import React from 'react'
import FadeIn from 'react-fade-in';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import './aboueme.css';

export default function AboutMe() {
    return(
    <>
        <div className="amcontent">
        <FadeIn>
        <h1 id="proj">About Me</h1><br/>
        <img alt='Joseph Kennemmer' id="hs" src="kennemeraboutme.JPG" className="img-fluid" />
        <br /><br />
        <div className='aboutme-header'>
            <img className='aboutme-logo' alt='jk logo' src="J! Logo.png" width="70" heigh="70" />
            <div className='aboutme-support-text'>Sound is the puppet master of emotion. Let’s make your audience <strong><i>feel</i></strong> your story.</div>
        </div>
        <div className="amtext">
            <p id="thetext"><br/>
                
                If you make commercials, films, or tv and need industry standard audio repair, sound effects that tell a story, or just need your project to sound cinematic, you’re in the right place. No matter what you have on your hands, We’ll make sure it sounds its absolute best.<br/><br/>
                
                I began working with sound in film at The University of Texas at Austin and have been fortunate to work on all kinds of projects since, from short documentaries to feature films, as a dialogue editor, sound designer, and re-recording mixer.<br/><br/>
                
                Since I was a child, movies have been at the forefront of my imagination. Soon after making films of my own, the power and mystery of sound in storytelling gripped me, propelling me into film sound. If I’m not re-watching Paul Thomas Anderson’s filmography, listening to the Allman brothers, or enjoying the great state of Texas, I’m probably manipulating recordings of baby tigers to create the sound of Cthulhu.<br/><br/>
                
                So let’s work together on your project! Whether it’s a feature film destined for festivals or a D&D podcast fan film that’ll make waves online, together, we’ll make it sound perfect.
                <br/><br/>
            </p>
        </div>
        <ScrollAnimation animateOnce={true} delay={500} animateIn='fadeIn'>
            <Button as={Link} to='/contact' className='am-contact-button' variant='outline-dark'><i className="fas fa-comment"></i>&nbsp;&nbsp;Contact Me</Button>
        </ScrollAnimation>
        <br/><br/><br/><img alt='Jospeh Kennemmer' id="hs" src="joe.jpg" className="img-fluid" />
        </FadeIn>
        </div>
    </>
    )
}
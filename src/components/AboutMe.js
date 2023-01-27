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
        <img alt='Joseph Kennemmer' id="hs" src="joe_hot.JPEG" className="img-fluid" />
        <br /><br />
        <div className="amtext">
            <p id="thetext"><br/>
            If you make commercials, films, or TV and need industry standard audio repair, sound effects that tell a story, or just need your project to sound cinematic, you’re in the right place.
            <br/><br/>
            Currently, I’m partnered with <a target="_blank" rel="noopener noreferrer" href="https://www.blspost.com/">BL&S Post</a>, one of the most technologically advanced post houses in the Southern United States, delivering audio post-production for commercial projects from across the country. Alongside my work with BL&S, I work with independent filmmakers, producers, and post houses as a sound supervisor and mixer, helping them take their stories to the next level by crafting cinematic soundtracks.
            <br/><br/>
            Since I was a child, movies have been at the forefront of my imagination. Soon after making films of my own, the power and mystery of sound in storytelling gripped me, propelling me into film sound. Since my time studying at The University of Texas at Austin, I’ve been fortunate to work on all kinds of projects, from national broadcast spots to feature films.
            <br/><br/>
            So let’s work together on your next project! Whether it’s a feature film destined to be experienced in a theater or a commercial spot that airs in living rooms across the country, we’ll make your audience feel your story.
            <br/><br/>
            </p>
        </div>
        <ScrollAnimation animateOnce={true} delay={500} animateIn='fadeIn'>
            <Button as={Link} to='/contact' className='am-contact-button' variant='outline-dark'><i className="fas fa-comment"></i>&nbsp;&nbsp;Contact Me</Button>
        </ScrollAnimation>
        </FadeIn>
        </div>
    </>
    )
}
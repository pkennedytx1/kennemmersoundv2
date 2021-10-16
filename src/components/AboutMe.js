import React from 'react'
import FadeIn from 'react-fade-in';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './aboueme.css';

export default function AboutMe() {
    return(
    <>
        <div className="amcontent">
        <FadeIn>
            <h1 id="proj">About Me</h1><br/>
            <img alt='Joseph Kennemmer' id="hs" src="./kennemeraaboutme.jpeg" className="img-fluid" />
            <br /><br />
            <div className='aboutme-header'>
                <div className='aboutme-support-text'>Sound is the puppet master of emotion. Let’s make your audience <strong><i>feel</i></strong> your story.</div>
            </div>
            <div className="amtext">
                <p id="thetext"><br/>
                    
                    If you make commercials, films, or television and need industry standard audio repair, sound effects that tell a story, or just need your project to sound cinematic, you’re in the right place.<br/><br/>
                    
                    Currently, I’m partnered with <a className='blns-link' target='_blank' rel="noopener noreferrer" href='https://www.blspost.com/'>BL&S Post</a>, one of the most technologically advanced post houses in the Southern United States, delivering audio post-production for commercial projects from across the country. Alongside my work with the fine folks at BL&S, I work with independent filmmakers and producers as a sound supervisor, helping them take their stories to the next level by crafting cinematic soundtracks.<br/><br/>
                    
                    Since I was a child, movies have been at the forefront of my imagination. Soon after making films of my own, the power and mystery of sound in storytelling gripped me, propelling me into film sound. Since my time studying at The University of Texas at Austin, I’ve been fortunate to work on all kinds of projects, from short documentaries to feature films, as a dialogue editor, sound designer, and re-recording mixer.<br/><br/>
                    
                    So let’s work together on your next project! Whether it’s a feature film destined for festivals or a D&D podcast fan film that’ll make waves online, together, we’ll make your audience feel your story.
                    <br/><br/>
                </p>
            </div>
            <div className='partners'>
                <img src='./J! Logo.png' height='75px' alt='bring light and sound logo'/>
                <a target='_blank' rel="noopener noreferrer" href='https://www.blspost.com/'><img src='./blnslogo.png' height='75px' alt='bring light and sound logo'/></a>
            </div>
            <Button as={Link} to='/contact' className='am-contact-button' variant='outline-dark'><i className="fas fa-comment"></i>&nbsp;&nbsp;Contact Me</Button>
            <br /><br />
        </FadeIn>
        </div>
    </>
    )
}
import React from 'react';
import Vimeo from '@u-wave/react-vimeo';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import FadeIn from 'react-fade-in'
import Footer from './Footer.js'
import './reel.css'

export default function Reel() {
    return(
        <div className='reel-container'>
        <FadeIn className='page-wrap'>
        <div className='reel-title'>
            <Button as={Link} to='/contact' className='muted-button' variant='outline-light'><i class="fas fa-comment"></i> Contact Me</Button>
            <h1 id="proj">Reel</h1>
            <Button as={Link} to='/projects' className='muted-button' variant='outline-light'><i class="fas fa-film"></i> My Projects</Button>
        </div>
        <Vimeo 
            responsive
            video="279542470"
            autoplay
        />
        </FadeIn>
        <Footer style={{ marginTop: '20px'}} className='footer'>
            <p id="reelquote">“The role of sound is really exactly what the role of every other aspect of filmmaking is, and that is to tell stories.”<br/>-Mark Mangini<br/></p>
        </Footer>
        </div>
    )
}
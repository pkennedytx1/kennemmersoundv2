import React from 'react';
import Vimeo from '@u-wave/react-vimeo';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import FadeIn from 'react-fade-in'
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
        </div>
    )
}
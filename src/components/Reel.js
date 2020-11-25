import React from 'react';
import Vimeo from '@u-wave/react-vimeo';
import FadeIn from 'react-fade-in'
import './reel.css'

export default function Reel() {
    return(
        <div className='reel-container'>
        <FadeIn className='page-wrap'>
        <div className='reel-title'>
            <h1 id="proj">Reel</h1>
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
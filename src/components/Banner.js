import React from 'react';
import ReactTextRotator from 'react-text-rotator';
import './banner.css';

class Banner extends React.Component {

    render() {
        const content = [
            {
                text: <a target='_blank' rel="noopener noreferrer" className='banner-text-link' href='https://vimeo.com/channels/staffpicks/442596329'>Hi there! A project I mixed this year was staff picked by Vimeo! You can check it out here.</a>,
                className: 'banner-text',
                animation: 'fade'
            }
        ]
        return(
            <div className='link-rotation-con'>
                <ReactTextRotator content={content} time={100000} startDelay={0}/>
            </div>
        )
    }
}

export default Banner;
import React from 'react';
import ReactTextRotator from 'react-text-rotator';
import './banner.css';

class Banner extends React.Component {

    render() {
        const content = [
            {
                text: <a target='_blank' rel="noopener noreferrer" className='banner-text-link' href='https://vimeo.com/channels/staffpicks/442596329'>Vimeo Staff Pick - No Somos De Aquí, Ni Somos De Allá</a>,
                className: 'banner-text',
                animation: 'fade'
            },
            {
                text: <span role='img' aria-label='christmantree' >🎄&nbsp;🎉&nbsp;🦃&nbsp;&nbsp;Happy Holidays from Kennemer Sound</span>,
                className: 'banner-text',
                animation: 'fade'
            }
        ]
        return(
            <div className='link-rotation-con'>
                <ReactTextRotator content={content} time={7000} startDelay={0}/>
            </div>
        )
    }
}

export default Banner;
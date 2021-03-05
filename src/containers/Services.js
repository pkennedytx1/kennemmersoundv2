import React from 'react';
import FadeIn from 'react-fade-in';
import ServiceCard from '../components/ServiceCard';
import Services from '../data/services.json';
import './services.css';

export class ServicesPage extends React.Component {
    render() {
        console.log(Services);
        return(
            <div className='service-page-container'>
                <FadeIn>
                <div className='serive-page-title'>
                    <h1 id="proj">Services</h1><br/>
                    <div className='supporting-service-title'>
                        <img className='service-logo' alt='jk logo' src="J! Logo.png" width="85" heigh="70" />
                        <h3 className='service-support-text'>My passion is great sound, whatever your need, let's make it sound great!</h3>
                    </div>
                </div>
                {Services.map((service, i) => {
                    return(
                        <ServiceCard key={i} service={service}/>
                    )
                })}
                </FadeIn>
            </div>
        )
    }
}
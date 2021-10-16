import React from 'react';
import FadeIn from 'react-fade-in';
import ServiceCard from '../components/ServiceCard';
import Services from '../data/services.json';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import './services.css';

export class ServicesPage extends React.Component {
    render() {
        const renderTooltip = (serviceName) => (
            <Tooltip id="button-tooltip">
                <h5>
                  {serviceName}
                </h5>
            </Tooltip>
          );
        return(
            <div className='service-page-container'>
                <FadeIn>
                <div className='service-page-title'>
                    <h1 id="proj">Services</h1><br/>
                    <h4 className='service-support-text'>Audio post-production is a world unto itself composed of many different crafts and disciplines. Here’s a brief rundown of all the things projects can need from me.</h4>
                </div>
                <div className='services-overview'>
                    {Services.map((service, i) => {
                        return(
                            <OverlayTrigger
                                placement="bottom"
                                delay={{ show: 0, hide: 0 }}
                                overlay={renderTooltip(service.serviceName)}
                            >   
                                <a href={`#${service.serviceName}`}>
                                    <i id='service-top-icons' className={service.svgIcon}></i>
                                </a>
                            </OverlayTrigger>
                        )
                    })}
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
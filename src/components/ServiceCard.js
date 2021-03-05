import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class ServiceCard extends React.Component {
    render() {
        console.log(this.props.service.serviceName)
        return(
            <div id={this.props.service.serviceName} className='service-card'>
                <ScrollAnimation animateOnce={true} delay={100} animateIn="fadeIn">
                    <div className='service-card-title'>
                        <h1>
                            <ScrollAnimation animateOnce={true} initiallyVisible={false} delay="400" animateIn="bounceIn">
                                <i id='service-page-icons ' style={{'color': 'rgb(0, 255, 136)', 'fontSize': '65px'}} className={this.props.service.svgIcon}></i>
                            </ScrollAnimation>
                        </h1>
                        <h2 className='service-name'>{this.props.service.serviceName}</h2>
                    </div>
                    {this.props.service.serviceDescription.map((description, i) => {
                        return(
                            <>
                                <h4 className='service-desc'>{description}</h4>
                            </>
                        )
                    })}
                </ScrollAnimation>
            </div>
        )
    }
}
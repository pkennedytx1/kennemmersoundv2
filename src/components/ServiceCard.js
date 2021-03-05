import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class ServiceCard extends React.Component {
    render() {
        console.log(this.props.service.serviceName)
        return(
            <div className='service-card'>
                <ScrollAnimation delay={200} animateIn="fadeIn">
                    <div className='service-card-title'>
                        <h1>
                            <ScrollAnimation initiallyVisible={false} delay="400" animateIn="bounceIn">
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
import React from 'react'
import { Image } from 'react-bootstrap'
import ProjectModal from './ProjectModal'
import ScrollAnimation from 'react-animate-on-scroll';
import './project.css'

class ProjectCard extends React.Component {
    state = {
        showProjectDetailModal: false,
        imageLoaded: false
    }

    handleClose = () => this.setState({ showProjectDetailModal: false });
    handleShow = () => this.setState({ showProjectDetailModal: true });

    handleImageLoad = () => {
        if(this.props.imageLoadingCallback) {
            this.setState({ imageLoaded: true }, () => {this.props.imageLoadingCallback()})
        }
    }

    render() {
        return(
            <ScrollAnimation animateOnce={true} animateIn='fadeIn'>
                <div style={!this.props.areImagesLoaded ? {} : {display: 'none'}} className='project-card-container'>
                    <Image onLoad={this.handleImageLoad.bind(this)} className='project-card-image' src={this.props.projectImg} />
                    <div className='project-card-overlay-container'>
                        <h2 className='card-title'>{this.props.projectTitle}</h2>
                        <button onClick={this.handleShow} className='card-detail-button'><span>Project Details</span></button>
                    </div>
                    <ProjectModal
                        show={this.state.showProjectDetailModal}
                        handleClose={this.handleClose}
                        handleShow={this.handleShow}
                        projectTitle={this.props.projectTitle}
                        projectType={this.props.projectType}
                        projectDescription={this.props.projectDescription}
                        links={this.props.links}
                        year={this.props.year}
                        role={this.props.role}
                        image={this.props.projectImg}
                    />
                </div>
            </ScrollAnimation>
        )
    }
}

export default ProjectCard
import React from 'react'
import ProjectCard from '../components/ProjectCard'
import Masonry from 'react-masonry-css'
import { Spinner } from 'react-bootstrap'
import FadeIn from 'react-fade-in'
import firebase from 'firebase'
import './projectgrid.css'

class Projects extends React.Component {

    constructor() {
        super()
        this.state = {
            projects: [],
            isLoading: true,
            isLoadingImages: true,
            loadingCount: 0
        }
    }

    componentDidMount() {
        let projects = []
        firebase.database().ref('projects/').orderByChild('orderBy').on('child_added', (data) => {
            projects.push(data.val())
            this.setState({
                projects
            }, () => {this.setState({ isLoading: false })})
        })
    }

    handleAllImagesLoading = () => {
        this.setState({ loadingCount: this.state.loadingCount + 1 }, () => {this.checkIfImagesAreLoaded()})
    }

    checkIfImagesAreLoaded = () => {
        if(this.state.projects.length === this.state.loadingCount) {
            this.setState({ isLoadingImages: false })
            return false
        }
    }

    render() {
        const breakpointColumnsObj = {
            default: 3,
            1000: 2,
            600: 1
          };
        return(
            <div style={{maxWidth: '1200px', margin: '0 auto'}}>
                <FadeIn>
                    <h1 id='proj'>Projects</h1>
                    {this.state.isLoading && this.state.isLoadingImages ?
                    <>
                        <Spinner animation="border" variant="light" />
                    </>
                    :
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">
                        {this.state.projects.map((project, i) => {
                            return(<ProjectCard 
                                key={i}
                                projectImg={project.projectImgURL}
                                projectTitle={project.projectTitle}
                                projectType={project.projectType}
                                projectDescription={project.projectDescription}
                                role={project.role}
                                year={project.year}
                                links={project.links}
                                isImageLoaded={this.handleLoadingImage}
                                imageNumber={this.state.projects.length}
                                imageLoadingCallback={this.handleAllImagesLoading}
                                areImagesLoaded={this.state.isLoadingImages}
                                />)
                        })}
                    </Masonry>
                    }
                </FadeIn>
            </div>
        )
    }
}

export default Projects
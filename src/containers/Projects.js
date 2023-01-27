import React from 'react'
import ProjectCard from '../components/ProjectCard'
import Masonry from 'react-masonry-css'
import { Spinner, DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap'
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
            loadingCount: 0,
            filterProjects: [],
            currentFilter: 'All'
        }
    }

    componentDidMount() {
        this.handleGetData()
    }

    handleGetData = () => {
        let projects = []
        firebase.database().ref('projects/').orderByChild('orderBy').on('child_added', (data) => {
            console.log(data)
            projects.push(data.val())
            this.setState({
                projects,
                filterProjects: projects
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

    handleProjectFilter = (e) => {
        e.preventDefault()
        let type = e.target.getAttribute('value')
        let projects = this.state.projects
        if (type === 'All') {
            this.setState({
                filterProjects: projects,
                currentFilter: 'All'
            })
        } else {
            let filterProjects = projects.filter(project => project.projectType === type)
            this.setState({ filterProjects, currentFilter: type })
        }
        console.log(this.state.filterProjects)
    }

    render() {
        const breakpointColumnsObj = {
            default: 3,
            1000: 2,
            600: 1
          };
        return(
            <div style={{maxWidth: '1200px', margin: '0 auto'}}>
                <FadeIn className='page-wrap'>
                    <h1 style={{marginBottom: '40px'}} id='proj'>Projects</h1>
                    {this.state.isLoading || this.state.isLoadingImages ?
                    <>
                        <Spinner animation="border" variant="light" />
                    </>
                    : null
                    }
                    <div 
                        style={{display: this.state.isLoadingImages ? 'hidden' : 'initial'}}
                    >
                    <div className='filter-projects-container' style={{ display: this.state.isLoadingImages ? 'none' : 'flex'}}>
                        <h3 className='filter-text'>Hello, you're currently viewing</h3>
                        <DropdownButton
                            as={ButtonGroup}
                            id='dropdown-variants-primary'
                            variant='secondary'
                            size='lg'
                            title={this.state.currentFilter === 'Film' ? 'Feature' : this.state.currentFilter}
                            >
                            <Dropdown.Item eventKey='1' active={this.state.currentFilter === 'All' ? true : false} onClick={this.handleProjectFilter} variant='outline-light' value='All'>All</Dropdown.Item>
                            <Dropdown.Item eventKey='2' active={this.state.currentFilter === 'Film' ? true : false} onClick={this.handleProjectFilter} variant='outline-light' value='Film'>Feature</Dropdown.Item>
                            <Dropdown.Item eventKey='3' active={this.state.currentFilter === 'Short Film' ? true : false} onClick={this.handleProjectFilter} variant='outline-light' value='Short Film'>Short Film</Dropdown.Item>
                            <Dropdown.Item eventKey='4' active={this.state.currentFilter === 'Commercial' ? true : false} onClick={this.handleProjectFilter} variant='outline-light' value='Commercial'>Commercial</Dropdown.Item>
                            <Dropdown.Item eventKey='5' active={this.state.currentFilter === 'Internet Video' ? true : false} onClick={this.handleProjectFilter} variant='outline-light' value='Internet Video'>Internet Video</Dropdown.Item>
                            <Dropdown.Item eventKey='6' active={this.state.currentFilter === 'Tv Series' ? true : false} onClick={this.handleProjectFilter} variant='outline-light' value='Tv Series'>TV Series</Dropdown.Item>
                        </DropdownButton>
                        <h3 className='filter-text'>projects.</h3>
                    </div>
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">
                        {this.state.filterProjects.map((project, i) => {
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
                    </div>
                </FadeIn>
            </div>
        )
    }
}

export default Projects
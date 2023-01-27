import React from 'react';
import { Form, Button, Row, Col, Spinner, Alert, Popover, OverlayTrigger } from 'react-bootstrap';
import firebase from 'firebase'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class EditProjects extends React.Component {
    state = {
        projectTitle: '',
        projectImg: '',
        projectImgURL: '',
        projectType: '',
        year: '',
        director: '',
        role: '',
        projectDescription: '',
        linkName: '',
        inputLink: '',
        linkType: '',
        links: [],
        currentProjects: [],
        showPreviewCard: false,
        showLoadingImageSpinner: false,
        error: false,
        selectedProject: '',
        disableGetProjects: false
    }

    componentDidMount() {
        let projects = []
        firebase.database().ref('projects/').on('child_added', (data) => {
            let completeData = data.val()
            completeData.projectKey = data.key
            projects.push(completeData)
            this.setState({
                currentProjects: projects
            })
        })
    }

    getSpecificProjectData = (e) => {
        let projectString = e.target.value
            firebase.database().ref(`projects/${projectString}`).on("value", (snapshot) => {
                let selectedProject = snapshot.val()
                if (e.target !== null) {
                    let projectIdentifier = e.target.value
                    this.setState({
                        selectedProject: projectIdentifier,
                        projectTitle: selectedProject.projectTitle,
                        projectImgURL: selectedProject.projectImgURL,
                        projectType: selectedProject.projectType,
                        year: selectedProject.year,
                        director: selectedProject.director,
                        role: selectedProject.role,
                        projectDescription: selectedProject.projectDescription,
                        links: selectedProject.links || []
                    })
                }
            })
    }

    handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        if (e.target.files) {
            value = e.target.files[0]
        }
        this.setState({
            [name]: value
        })
    }

    handleImageUpload = () => {
        this.setState({ showLoadingImageSpinner: true})
        firebase.storage().ref().child('images/' + this.state.projectTitle).put(
            this.state.projectImg).then((snapshot) => {
                snapshot.ref.getDownloadURL().then((downloadURL) => {
                    this.setState({
                        projectImgURL: downloadURL
                    }, () => {
                        toast.success("Image Uploaded Successfully!")
                        this.setState({ showLoadingImageSpinner: false})
                    })
                })
            })
    }

    handleNewProjectSubmit = (e) => {
        if(this.state.projectTitle === '' ||
        this.state.projectImgURL === ''||
        this.state.projectType === ''||
        this.state.year === '' ||
        this.state.director === '' ||
        this.state.role === '' ||
        this.state.projectDescription === '') {
            this.setState({ error: true })
            return false
        } 
        this.setState({ error: false })
        e.preventDefault()
        firebase.database().ref('projects').push({
            projectTitle: this.state.projectTitle,
            projectImgURL: this.state.projectImgURL,
            projectType: this.state.projectType,
            year: this.state.year,
            director: this.state.director,
            role: this.state.role,
            projectDescription: this.state.projectDescription,
            links: this.state.links,
        }
        )
        .then(() => this.setState({ selectedProject: ''}))
        .then(() => toast.success("Project Uploaded Successfully!"))
    }

    handleProjectUpdate = (e) => {
        if(this.state.projectTitle === '' ||
        this.state.projectImgURL === ''||
        this.state.projectType === ''||
        this.state.year === '' ||
        this.state.director === '' ||
        this.state.role === '' ||
        this.state.projectDescription === '') {
            this.setState({ error: true })
            return false
        } 
        this.setState({ error: false })
        e.preventDefault()
        firebase.database().ref(`projects/${this.state.selectedProject}`).set({
            projectTitle: this.state.projectTitle,
            projectImgURL: this.state.projectImgURL,
            projectType: this.state.projectType,
            year: this.state.year,
            director: this.state.director,
            role: this.state.role,
            projectDescription: this.state.projectDescription,
            links: this.state.links,
        }
        )
        .then(() => {
            this.setState({
                projectTitle: '',
                projectImg: '',
                projectImgURL: '',
                projectType: '',
                year: '',
                director: '',
                role: '',
                projectDescription: '',
                linkName: '',
                inputLink: '',
                linkType: '',
                links: [],
                showPreviewCard: false,
                showLoadingImageSpinner: false,
                error: false,
                selectedProject: ''
            })
        })
        .then(() => toast.success("Project Updated Successfully!"))
        .then(() => {
            let projects = []
            firebase.database().ref('projects/').on('child_added', (data) => {
                let completeData = data.val()
                completeData.projectKey = data.key
                projects.push(completeData)
                this.setState({
                    currentProjects: projects
                })
            })
        })
    }

    handleProjectDelete = () => {
        firebase.database().ref(`projects/${this.state.selectedProject}`).remove()
        .then(() => {
            this.setState({
                projectTitle: '',
                projectImg: '',
                projectImgURL: '',
                projectType: '',
                year: '',
                director: '',
                role: '',
                projectDescription: '',
                linkName: '',
                inputLink: '',
                linkType: '',
                links: [],
                showPreviewCard: false,
                showLoadingImageSpinner: false,
                error: false,
                selectedProject: ''
            })
        })
        .then(() => {
            let projects = []
            firebase.database().ref('projects/').on('child_added', (data) => {
                let completeData = data.val()
                completeData.projectKey = data.key
                projects.push(completeData)
                this.setState({
                    currentProjects: projects
                })
            })
        })
    }

    handleCardPreview = () => {
        this.setState({
            showPreviewCard: true
        })
    }

    handleAddLink = () => {
        let linkArr = this.state.links
        let newLink = {
            link: this.state.inputLink,
            type: this.state.linkType,
            name: this.state.linkName
        }
        linkArr.push(newLink)
        this.setState({
            links: linkArr
        })
    }

    handleLinkDelete = (e) => {
        let index = e.target.getAttribute('value')
        let currentLinks = this.state.links
        currentLinks.splice(index)
        this.setState({
            links: currentLinks
        })
    }

    render() {
        const popover = (
            <Popover id="popover-basic">
                <Popover.Title as="h3">Confirm Project Delete</Popover.Title>
                <Popover.Content>
                Deleting means never seeing this again, are you sure?
                <Button style={{borderRadius: '0px', margin: '0'}}onClick={this.handleProjectDelete} block variant='danger'>Delete Project</Button>
                </Popover.Content>
            </Popover>
        )
        return (
            <>
                {this.state.error ?
                <Alert style={{maxWidth: '600px', margin: '0 auto'}} variant='danger'>
                    Please make sure to fill out all fields other than the <b>optional links field</b>.
                </Alert> :
                null
                }
                <h3 style={{ color: 'white', marginTop: '20px' }}>Edit/Delete Project Form</h3>
                <Form style={{ color: 'white', backgroundColor: 'black', margin: '0 auto', maxWidth: '800px' }}>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Select Project</Form.Label>
                        <Form.Control onChange={this.getSpecificProjectData} as="select" custom>
                            <option value="">-- Select Project --</option>
                            {this.state.currentProjects.map((project, i) => {
                                return <option value={project.projectKey} key={i}>{project.projectTitle}</option>
                            })}
                        </Form.Control>
                    </Form.Group>
                </Form>
                {this.state.selectedProject &&
                    <Form className='new-project-form' style={{ maxWidth: '800px', margin: '10px auto', color: 'white' }}>
                        <Row>
                            <h5 style={{ margin: '0 auto' }}>Current Image</h5>
                        </Row>
                        <Row>
                            <img alt='project' style={{maxWidth: '400px', margin: '20px auto'}} src={this.state.projectImgURL} />
                        </Row>
                        <Row>
                            <Form.Group as={Col}>
                                <Form.Label>Project Title</Form.Label>
                                <Form.Control value={this.state.projectTitle} onChange={this.handleChange} name="projectTitle" placeholder="Project Title" />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Project Image</Form.Label>
                                {this.state.showLoadingImageSpinner ? 
                                <div>
                                    <Spinner animation="border" variant="light" />
                                </div> :
                                <>
                                <Form.File
                                    onChange={this.handleChange}
                                    name='projectImg'
                                    id="custom-file"
                                    label={this.state.projectImg.name ? this.state.projectImg.name : 'Please select an image'}
                                    custom
                                />
                                <Button style={{ margin: '0', borderRadius: '0' }} block variant="dark" onClick={this.handleImageUpload}>Change Image</Button>
                                </>
                                }
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col}>
                                <Form.Label>Project Type</Form.Label>
                                <Form.Control value={this.state.projectType} name='projectType' onChange={this.handleChange} as='select'>
                                    <option value=''>Please select a project type</option>
                                    <option value='Film'>Film</option>
                                    <option value='Short Film'>Short Film</option>
                                    <option value='Commercial'>Commercial</option>
                                    <option value='Podcast'>Podcast</option>
                                    <option value='Tv Series'>TV Series</option>
                                    <option value='Internet Video'>Internet Video</option>
                                    <option value='Music Video'>Music Video</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Year</Form.Label>
                                <Form.Control value={this.state.year} onChange={this.handleChange} name="year" placeholder="Year" />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col}>
                                <Form.Label>Director</Form.Label>
                                <Form.Control value={this.state.director} onChange={this.handleChange} name="director" placeholder="Director" />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Role</Form.Label>
                                <Form.Control value={this.state.role} onChange={this.handleChange} name="role" placeholder="Role" />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col}>
                                <Form.Label>Project Description</Form.Label>
                                <Form.Control value={this.state.projectDescription} onChange={this.handleChange} name="projectDescription" as="textarea" placeholder="Project Description" />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Col>
                                <h5>Current Links</h5>
                                {this.state.links.length > 0 ?
                                    <>
                                        {this.state.links.map((link, i) => {
                                            return <div key={i} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Button
                                                    style={{ color: 'white' }}
                                                    variant='dark'
                                                    rel="noopener noreferrer"
                                                    target='_blank'
                                                    href={link.link} s
                                                    tyle={{ color: 'white' }}
                                                    key={i}>{(link.type === 'person') ? <i className="fas fa-person-booth"></i> : <i className="fab fa-youtube"></i>} {link.name}
                                                </Button>
                                                <i onClick={this.handleLinkDelete} value={i} id='close-btn' className="far fa-times-circle"></i>
                                            </div>
                                        })}
                                    </>
                                    : <p>You have not added any links</p>}
                            </Col>
                            <Form.Group as={Col} controlId="formBasicEmail">
                                <Form.Label>Links</Form.Label>
                                <Form.Control onChange={this.handleChange} name='linkName' placeholder='Link Name' />
                                <Form.Control onChange={this.handleChange} name="inputLink" placeholder="Link URL" />
                                <Form.Control onChange={this.handleChange} name='linkType' as='select'>
                                    <option value=''>Please select a button type</option>
                                    <option value='person'>Person</option>
                                    <option value='content'>Content</option>
                                </Form.Control>
                                <Button style={{ margin: '0', borderRadius: '0' }} block variant="dark" onClick={this.handleAddLink}>Add Link</Button>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col}>
                                <Button onClick={this.handleProjectUpdate} style={{ margin: '0', borderRadius: '0'}} block variant="primary">Update Project</Button>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <OverlayTrigger rootClose={true} trigger="click" placement="top" overlay={popover}>
                                    <Button style={{ margin: '0', borderRadius: '0'}} block variant="danger">Delete Project</Button>
                                </OverlayTrigger>
                            </Form.Group>
                        </Row>
                    </Form>
                }
                <br /><br /><br />
            </>
        )
    }
}

export default EditProjects;
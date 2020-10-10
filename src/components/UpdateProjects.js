import React from 'react';
import { Form, Button, Row, Col, Spinner, Alert } from 'react-bootstrap';
import firebase from 'firebase'
import { toast } from 'react-toastify';
import ProjectCard from './ProjectCard'
import 'react-toastify/dist/ReactToastify.css';

class UpdateProjects extends React.Component {
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
        error: false
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
        ).then(() => toast.success("Project Uploaded Successfully!"))
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

    render() {
        return (
            <>
                {this.state.error ?
                <Alert style={{maxWidth: '600px', margin: '0 auto'}} variant='danger'>
                    Please make sure to fill out all fields other than the <b>optional links field</b>.
                </Alert> :
                null
                }
                {this.state.showPreviewCard ?
                    <>
                        <h3 style={{ color: 'white' }}>New Project Preview</h3>
                        <div style={{maxWidth: '400px', margin: '0 auto'}}>
                            <ProjectCard
                                projectTitle={this.state.projectTitle}
                                projectImg={this.state.projectImgURL}
                                projectType={this.state.projectType}
                                director={this.state.director}
                                year={this.state.year}
                                role={this.state.role}
                                projectDescription={this.state.projectDescription}
                                links={this.state.links}
                            />
                        </div>
                        <div style={{ borderRadius: '0', maxWidth: '400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
                            <Button style={{ margin: '0', borderRadius: '0'}} onClick={this.handleNewProjectSubmit} variant='primary'>Upload Project</Button>
                            <Button style={{ margin: '0', borderRadius: '0'}} variant='danger'>Edit</Button>
                        </div>
                    </> :
                    null
                }
                <h3 style={{ color: 'white', marginTop: '20px' }}>Project Form</h3>
                <Form className='new-project-form' style={{ maxWidth: '800px', margin: '10px auto', color: 'white' }}>
                    <Row>
                        <Form.Group as={Col}>
                            <Form.Label>Project Title</Form.Label>
                            <Form.Control onChange={this.handleChange} name="projectTitle" placeholder="Project Title" />
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
                            <Button style={{ margin: '0', borderRadius: '0' }} block variant="dark" onClick={this.handleImageUpload}>Upload Image</Button>
                            </>
                            }
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col}>
                            <Form.Label>Project Type</Form.Label>
                            <Form.Control name='projectType' onChange={this.handleChange} as='select'>
                                <option value=''>Please select a project type</option>
                                <option value='Film'>Film</option>
                                <option value='Short Film'>Short Film</option>
                                <option value='Commercial'>Commercial</option>
                                <option value='Film'>Podcast</option>
                                <option value='Tv Series'>TV Series</option>
                                <option value='Internet Video'>Internet Video</option>
                                <option value='Music Video'>Music Video</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Year</Form.Label>
                            <Form.Control onChange={this.handleChange} name="year" placeholder="Year" />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col}>
                            <Form.Label>Director</Form.Label>
                            <Form.Control onChange={this.handleChange} name="director" placeholder="Director" />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Role</Form.Label>
                            <Form.Control onChange={this.handleChange} name="role" placeholder="Role" />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col}>
                            <Form.Label>Project Description</Form.Label>
                            <Form.Control onChange={this.handleChange} name="projectDescription" as="textarea" placeholder="Project Description" />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Col>
                            <h5>Current Links</h5>
                            {this.state.links.length > 0 ?
                                <>
                                    {this.state.links.map((link, i) => {
                                        return <Button
                                            style={{ color: 'white' }}
                                            variant='dark'
                                            rel="noopener noreferrer"
                                            target='_blank'
                                            href={link.link} s
                                            tyle={{ color: 'white' }}
                                            key={i}>{(link.type === 'person') ? <i class="fas fa-person-booth"></i> : <i class="fab fa-youtube"></i>} {link.name}
                                        </Button>
                                    })}
                                </>
                                : <p>You have not added any links</p>}
                        </Col>
                        <Form.Group as={Col} controlId="formBasicEmail">
                            <Form.Label>Links</Form.Label>
                            <Form.Control onChange={this.handleChange} name='linkName' placeholder='Link Name' />
                            <Form.Control onChange={this.handleChange} name="inputLink" placeholder="Link" />
                            <Form.Control onChange={this.handleChange} name='linkType' as='select'>
                                <option value=''>Please select a button type</option>
                                <option value='person'>Person</option>
                                <option value='content'>Content</option>
                            </Form.Control>
                            <Button style={{ margin: '0', borderRadius: '0' }} block variant="dark" onClick={this.handleAddLink}>Add Link</Button>
                        </Form.Group>
                    </Row>
                    <Button onClick={this.handleCardPreview} style={{ margin: '0', borderRadius: '0' }} block variant="dark">
                        Generate Project Card Preview
                    </Button>
                </Form>
                <br /><br /><br />
            </>
        )
    }
}

export default UpdateProjects;
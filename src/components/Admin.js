import React from 'react'
import firebase from 'firebase'
import { withRouter, Link } from 'react-router-dom'
import { Button, Form, Tabs, Tab } from 'react-bootstrap'
import UpdateProjects from './UpdateProjects'
import EditProjects from './EditProjects'
import { SortProjects } from './SortProjects'
import Invoice from './Invoice'
import FadeIn from 'react-fade-in'
import Projects from '../containers/Projects'
import './admin.css'

class Admin extends React.Component {
    state = {
        email: '',
        password: '',
        error: null,
        user: null
    };

    componentDidMount() {
        if (firebase.auth().currentUser) {
            this.setState({ user: firebase.auth().currentUser })
        }
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        firebase
            .auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
                firebase.auth().signInWithEmailAndPassword(email, password)
                    .then((user) => {
                        this.setState({ user })
                    })
                    .catch((error) => {
                        this.setState({ error: error });
                    });
            })
    };

    logOutUser = () => {
        firebase.auth().signOut();
        this.props.history.push('/');
    };

    handleProjectUpdate = (key) => {
        if (key === "projects") {
            this.refs.childProject.handleGetData()
        }
    }

    render() {
        return (
            <>
                {this.state.user ?
                    <>
                        <br /><br />
                        <div style={{ margin: '0 auto', padding: '0 20px', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
                            <h2>Admin Page</h2>
                            <Button style={{ margin: '0', borderRadius: '0' }} variant="danger" onClick={this.logOutUser} children="Log Out" />
                        </div>
                        <Tabs onSelect={this.handleProjectUpdate} defaultActiveKey="projects" id="uncontrolled-tab-example">
                            <Tab eventKey="projects" title="Current Projects Page">
                                <Projects ref="childProject"/>
                            </Tab>
                            <Tab eventKey="newproject" title="New Project">
                                <UpdateProjects userId={this.state.user.id} />
                            </Tab>
                            <Tab eventKey="editproject" title="Edit/Delete Project">
                                <EditProjects userId={this.state.user.id} />
                            </Tab>
                            <Tab eventKey="orderproject" title="Order Projects">
                                <SortProjects userId={this.state.user.id} />
                            </Tab>
                            <Tab eventKey="invoices" title="Create an Invoice">
                                <Invoice user={this.state.user} />
                            </Tab>
                        </Tabs>
                    </>
                    :
                    <>
                        <Form className='admin-login-form' onSubmit={this.handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
                            <FadeIn>
                                <p style={{ color: 'white', maxWidth: '400px', margin: '20px auto' }}>Hello, you have found the <b>Admin</b> page.<br /> If you are here by accident,
                                    please click <Link to='/'>here</Link> to go back to the home page.</p>
                                <h2 style={{ color: 'white' }}>Admin Page</h2>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control name="email" onChange={this.handleInputChange} type="name" placeholder="Email" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control name="password" onChange={this.handleInputChange} type="password" placeholder="Password" />
                                </Form.Group>
                                <Button block style={{ margin: '0', borderRadius: '0' }} variant="dark" type="submit">
                                    Welcome Back Joe <span aria-label='happy' role='img'>😄</span>
                                </Button>
                            </FadeIn>
                        </Form>
                    </>
                }
            </>
        )
    }
}

export default withRouter(Admin);
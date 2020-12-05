import React from 'react';
import { Form, Button } from 'react-bootstrap';
import SimpleMap from './GoogleMap'
import FadeIn from 'react-fade-in';
import './contact.css';

export default function ContactMe() {
    return(
        <FadeIn>
            <div id="contact" className="content">
                <div className="contact">
                    <br/>
                    <img alt='jk logo' src="J! Logo.png" width="70" height="70" />
                    <h1 id="contact-logo">Joseph Kennemer</h1>
                </div>
            </div> 
            <div className='social-media'>
                <a rel="noopener noreferrer" target='_blank' href='https://www.linkedin.com/in/josephkennemer/' className='social-media-button'><i className="fab fa-linkedin"></i></a>
                <a rel="noopener noreferrer" target='_blank' href='https://twitter.com/joseph_kennemer' className='social-media-button'><i className="fab fa-twitter-square"></i></a>
                <a rel="noopener noreferrer" target='_blank' href='https://www.instagram.com/joseph.kennemer/?hl=en'className='social-media-button'><i className="fab fa-instagram"></i></a>
            </div>
            <br /><br />
            <Form id='contact-form'
                action="https://formspree.io/josephkennemer@gmail.com"
                method="POST"
                style={{paddingRight: '5px', paddingLeft: '5px'}}
            >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Hello there! Leave your email</Form.Label>
                    <Form.Control className='contact-form-input' type="text" name="_replyto"/>
                </Form.Group>
                <Form.Group controlId="formBasicName">
                    <Form.Label>and your name</Form.Label>
                    <Form.Control className='contact-form-input' type="text" name="_replytoname"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>along with your message</Form.Label>
                    <Form.Control className='contact-form-textarea' as="textarea" name="message"></Form.Control >
                </Form.Group>
                <Form.Label>and you'll be hearing from me soon!</Form.Label>
                <Button block className='contact-form-submit-button' variant='outline-success' type="submit">Send Your Message to Joe</Button>
            </Form>
            <br /><br /><br />
            <h1 id="conbuts"><i className="fas fa-phone"></i> 214-773-7945</h1>
            <a id="mailto" href="mailto:josephkennemer@gmail.com"><h1 id="conbuts"><i className="far fa-envelope"></i> josephkennemer@gmail.com</h1></a>
            <br /><br /><br />
            <h5>Save My Contact Information</h5>
            <img alt='qr code' src='kennemerqr.png' />
            <br /><br /><br />
            <SimpleMap />
        </FadeIn>
    )
}
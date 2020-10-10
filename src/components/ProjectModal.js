import React from 'react'
import { Modal, Button, Image } from 'react-bootstrap'
import './modal.css'

export default function ProjectModal(props) {
    return (
        <>
          <Modal className='project-modal-container' show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {props.projectTitle}
                    <h6>{props.year}  -  {props.projectType}</h6>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.image && <Image className='project-modal-image' src={props.image} />}
                <br />
                <h5 style={{textAlign:'center'}}>{props.role}</h5>
                {props.projectDescription}
            </Modal.Body>
                {props.links && props.links.length > 0 ?
                <Modal.Footer className='project-modal-footer'>
                {props.links && props.links.length > 0 ? props.links.map((link, i) => {
                    return(
                            <Button className='project-modal-links' variant='dark' target='_blank' href={link.link}>{link.type === 'content' ? <i className="fab fa-youtube"></i> : <i className="fas fa-users"></i>} {link.name}</Button>
                            )
                        }) : null }
                </Modal.Footer>
                : null}
          </Modal>
        </>
      );
}
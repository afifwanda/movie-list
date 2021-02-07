import React from 'react';
import '../Styles/home.style.css'
import {Button,Modal} from 'react-bootstrap'

function ModalPoster(props){  
  return(
    <Modal
      show={props.show}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div 
        className="card"
        >
          <img src={props.movie.Poster} className="modal-image" alt="..."></img>
      </div> 
      <Modal.Footer>
        <Button onClick={props.handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalPoster
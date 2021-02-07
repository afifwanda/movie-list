import React,{useState} from 'react';
import '../Styles/home.style.css'
import {Link} from 'react-router-dom';
import ModalPoster from './Modal-component'

function Card(props){  
  const [modal,setModal] = useState(false)

  const handleShowModal = () =>{
    setModal(true)
  }

  const handleHideModal = () => {
    setModal(false)
  }

  return(
      <div className="card movie_card">
        <ModalPoster show={modal} handleClose={handleHideModal} movie={props.data}/>
        <div onClick={handleShowModal}>
        <img src={props.data.Poster} className="card-img-top" alt="..."></img>
        </div>
        <Link to={`/movie/${props.data.imdbID}`}>
        <div className="card-body">
          <h5 className="card-title">{props.data.Title}</h5>
          <div className='d-flex justify-content-between'>
            <div className="movie_info">{props.data.Year}</div>
            <div className="movie_info float-right">{props.data.Type}</div>
          </div>
        </div>
        </Link>
      </div>  
    
  )
}

export default Card
import React from 'react';
import '../Styles/home.style.css'

function Card(props){  
  console.log(props.data)
  return(
    <div className="card movie_card">
      <img src={props.data.Poster} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">{props.data.Title}</h5>
        <div className='d-flex justify-content-between'>
          <div className="movie_info">{props.data.Year}</div>
          <div className="movie_info float-right">{props.data.Type}</div>
        </div>
      </div>
    </div>  
  )
}

export default Card
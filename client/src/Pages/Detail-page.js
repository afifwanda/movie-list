import React, {useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getDetailData} from '../Store/actions';
import '../Styles/home.style.css';
import ModalPoster from '../Components/Modal-component';
import Header from '../Components/Header-component';

function Detail(){
  const param = useParams()
  const [modal,setModal] = useState(false)

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getDetailData(param.id))
  },[dispatch]);

  const movie = useSelector(state=>state.reducer.detailMovie)
  
  const handleShowModal = () =>{
    setModal(true)
  }

  const handleHideModal = () => {
    setModal(false)
  }
  
  return(
    <div className="body">
      <ModalPoster show={modal} handleClose={handleHideModal} movie={movie}/>
      <Header />
      <div className='lower-body'>
        <div className='container'>
          <div className='left-side'>
            <div 
            className="card poster"
            onClick={handleShowModal}
            >
              <img src={movie.Poster} className="card-img-top" alt="..."></img>
            </div>  
          </div>
          <div className='right-side'>
            <div class="movie-details-card">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <h3>Title</h3>
                  {movie.Title}
                </li>
                <li class="list-group-item">
                  <h3>Plot</h3>
                  {movie.Plot}
                </li>
                <li class="list-group-item">
                  <h3>Director</h3>
                  {movie.Director}
                </li>
                <li class="list-group-item">
                  <h3>Actors</h3>
                  {movie.Actors}
                </li>
                <li class="list-group-item">
                  <div className='score'>
                    <div className=''>
                      <i className="fa fa-imdb text-warning"></i> 
                    </div>
                    <div className='mt-2 score-box'>
                      <h3>{movie.imdbRating}/11</h3>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Detail
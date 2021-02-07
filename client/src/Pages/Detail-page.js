import React, {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getData,anotherGetData} from '../Store/actions';
import '../Styles/home.style.css'
import Card from '../Components/Card-component';

function Detail(){

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getData())
    dispatch(anotherGetData())
  },[dispatch]);

  const listMovie = useSelector(state=>state.reducer.movies)
  console.log(listMovie)
  
  return(
    <div className="body">
      <div className="upper-body">
          <h1>Movie </h1>
          <h1 className='database'>Database</h1>
      </div>
    </div>


  )
}

export default Detail
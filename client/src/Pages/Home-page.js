import React, {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getData,anotherGetData} from '../Store/actions';
import '../Styles/home.style.css'
import Card from '../Components/Card-component';

function Home(){

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
      <div className="bottom-body">
        <div className='search-box'>
          <input type="text" className="search-input" placeholder="Search Movie/Series" />
          <i className="fa fa-search"></i>
        </div>
        <div className='container'>
          {
            listMovie.map((element,index)=>{
              return <Card key={index} data={element} />
            })
          }
        </div>
      </div>
    </div>


  )
}

export default Home
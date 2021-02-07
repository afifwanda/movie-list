import React, {useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useParams} from 'react-router-dom'
import {getDataSearched} from '../Store/actions';
import '../Styles/home.style.css'
import Card from '../Components/Card-component';
import Header from '../Components/Header-component';

function Search(){
  const[loading,setLoading] = useState(false)
  const params = useParams()
  let page = 1

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getDataSearched(params.keyword,page))
  },[dispatch]);

  const listMovie = useSelector(state=>state.reducer.searchedMovie)
  const total = useSelector(state=>state.reducer.totalResult)

  
  console.log(listMovie,total)
  
  return(
    <div className="body">
      <Header />
      <div className="lower-body d-flex row">
        {
          listMovie[0] !== undefined ?
          <div className='container'>
          {
            listMovie.map((element,index)=>{
              return <Card key={index} data={element}/>
            })
          }
        </div> : <div className='container result'><h3>Data Not Found</h3></div>
        }
      </div>
    </div>


  )
}

export default Search
import React, {useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {getData,clearSearch} from '../Store/actions';
import '../Styles/home.style.css';
import Card from '../Components/Card-component';
import Header from '../Components/Header-component';

function Home(){
  const dispatch = useDispatch();
  const history = useHistory();
  const [keyword,setKeyword] = useState('undefined')

  useEffect(()=>{
    dispatch(getData())
    dispatch(clearSearch())
  },[dispatch]);

  const listMovie = useSelector(state=>state.reducer.movies)

  function handleSearch(keyword) {
    console.log(keyword)
    history.push(`/search/${keyword}`)
  }

  const handleRefresh = () => {
    dispatch(clearSearch())
  }
  
  return(
    <div className="body" onScroll={handleRefresh}>
      <Header />
      <div className="lower-body d-flex row">
        <div className='search-box'>
          <input type="text" 
          className="search-input" 
          placeholder="Search Movie/Series" 
          onChange={(e)=>setKeyword(e.target.value)}
          />
          <i 
          onClick={()=>handleSearch(keyword)}
          className="fa fa-search"
          data-testid="search"
          ></i>
        </div>
        <div className='container'>
          {
            listMovie.map((element,index)=>{
              return <Card key={index} data={element} data-testid="card"/>
            })
          }
        </div>
      </div>
    </div>

  )
}

export default Home
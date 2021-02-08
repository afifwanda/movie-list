import React, {useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useParams} from 'react-router-dom'
import {getDataSearched} from '../Store/actions';
import '../Styles/home.style.css'
import Card from '../Components/Card-component';
import Header from '../Components/Header-component';

function Search(){
  const[loading,setLoading] = useState(false)
  const[page,setPage]= useState(1)
  const[noData,setNoData] = useState(false)
  const params = useParams()
  const dispatch = useDispatch();

  window.onscroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      if(!noData) {
        loadUserList(page);
      }
    }
  }

  useEffect(()=>{
    dispatch(getDataSearched(params.keyword,page))
    setPage(page+1)
  },[dispatch]);

  const listMovie = useSelector(state=>state.reducer.searchedMovie)
  const total = Math.floor(useSelector(state=>state.reducer.totalResult)/10)

  const loadUserList = () => {
    setLoading(true);
    if(page < total)
    setTimeout(() => {
        dispatch(getDataSearched(params.keyword,page))
        .then((res) => {
          const newPage = page + 1;
          setPage(newPage);
          if(res.data.length===0)
            setNoData(true);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() =>{
          setLoading(false);
        })
      }
    ,1500);
  }

  
  console.log(listMovie,total)
  
  return(
    <div className="body">
      <Header />
      <div className="lower-body">
        <div className='result-box'>
          <h3 className='text-white'>Result for {params.keyword} :</h3>
        </div>
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
      {loading ?  <div className="text-center text-white">loading data ...</div> : "" }
      </div>
    </div>


  )
}

export default Search
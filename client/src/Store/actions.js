import axios from 'axios'

export const getData = () => {
    return async dispatch => {
      const result = await axios.get("http://www.omdbapi.com/?apikey=faf7e5bb&s=Legend&page=1")
      dispatch({
        type: 'GET_DATA',
        payload: {
          movieList : result.data.Search
        }
      })
    }
}

export const getDetailData = (id) => {
  return async dispatch => {
    const result = await axios.get(`http://www.omdbapi.com/?apikey=faf7e5bb&i=${id}`)
    dispatch({
      type: 'GET_DETAIL',
      payload: {
        movie : result.data
      }
    })
  }
}

export const getDataSearched = (keyword,page) => {
  return async dispatch => {
    const result = await axios.get(`http://www.omdbapi.com/?apikey=faf7e5bb&i&s=${keyword}&page=${page}`)
    console.log(result)
    dispatch({
      type: 'GET_SEARCHED',
      payload: {
        movieSearched : result.data.Search,
        result : Number(result.data.totalResults)
      }
    })
  }
}

export const clearSearch = () => {
  return async dispatch => {
    dispatch({
      type: 'CLEAR_SEARCH',
      payload: {
        movieReset : []
      }
    })
  }
}
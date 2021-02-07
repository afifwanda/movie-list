import axios from 'axios'

export const getData = () => {
  return function(dispatch) {
    return axios.get("http://www.omdbapi.com/?apikey=faf7e5bb&s=Legend&page=1")
      .then(({ data }) => {
      dispatch({
        type: 'GET_CONTACT',
        payload: {
          contacts : data
        }
      });
    });
  };
}

export const anotherGetData = () => {
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
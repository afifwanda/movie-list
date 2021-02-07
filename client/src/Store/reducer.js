const initialState = {
  movies : [],
  detailMovie : [],
  searchedMovie : [],
  totalresult : 0
}

const reducer = (state = initialState,action) =>{
  switch (action.type){
    case "GET_DATA":
      return{...state, movies : action.payload.movieList};
    case "GET_DETAIL":
      return{...state, detailMovie : action.payload.movie};
    case "GET_SEARCHED":
      return{...state, 
        searchedMovie : state.searchedMovie.concat(action.payload.movieSearched),
        totalResult : action.payload.result
      };
    case "CLEAR_SEARCH":
      return{...state, searchedMovie : action.payload.movieReset};
    default:
      return state
  }
}

export default reducer
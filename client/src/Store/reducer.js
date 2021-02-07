const initialState = {
  movies : [],
}

const reducer = (state = initialState,action) =>{
  switch (action.type){
    case "GET_DATA":
      return{...state, movies : action.payload.movieList};
    default:
      return state
  }
}

export default reducer
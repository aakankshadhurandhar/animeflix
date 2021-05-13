const AppReducer=(state,action)=>{
    switch(action.type){
        case "ADD_ANIME":
            return{
                ...state,
                favourites: [action.payload, ...state.favourites]
            }
        case "REMOVE_ANIME":
            return {
                ...state,
                favourites:state.favourites.filter(anime=>anime.id !==action.payload)
            }
        
        default:
            return state
    }
}
export default AppReducer
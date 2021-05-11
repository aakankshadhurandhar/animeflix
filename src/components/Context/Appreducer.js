const AppReducer=(state,action)=>{
    switch(action.type){
        case "ADD_ANIME":{
            return{
                ...state,
                favourites: [action.payload, ...state.favourites]
            }
        
        };
        default:
            return state
    }
}
export default AppReducer
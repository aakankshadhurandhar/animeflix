import React, { createContext, useEffect, useReducer } from 'react';
import AppReducer from './Appreducer';

const initialState={
    favourites: localStorage.getItem('favourites') ? JSON.parse(localStorage.getItem('favourites')) : []
}

export const GlobalContext =createContext(initialState);

export const GlobalProvider= props =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);
    useEffect(()=>{
        localStorage.setItem('favourites',JSON.stringify(state.favourites));
    },[state]);

    //actions
    const addAnimeToWatchlist=anime=>{
        dispatch({type: "ADD_ANIME", payload: anime})
    }
    const removefromwatchlist=(id)=>{
        dispatch({type:"REMOVE_ANIME",payload:id})
    }
    return(
        <GlobalContext.Provider 
            value={{
                favourites: state.favourites,
                addAnimeToWatchlist,
                removefromwatchlist
               
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
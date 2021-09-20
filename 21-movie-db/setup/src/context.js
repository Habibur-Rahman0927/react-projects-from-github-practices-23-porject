import React, { useState, useContext, useEffect } from 'react'
import useFetch from './useFetch';
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
//http://www.omdbapi.com/?i=tt3896198&apikey=83197ef8
// 2330d69f
//https://www.omdbapi.com/?apikey=51531bb2&s=batman
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('batman');
  const { loading, error, movies } = useFetch(`&s=${query}`);
  return <AppContext.Provider value={{ loading, error, movies, query, setQuery }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

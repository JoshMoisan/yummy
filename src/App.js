import { useEffect, useState } from 'react'

import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';


const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=9bd827d'

const App = () => {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
    console.log(data.Search)
  }

  useEffect(() => {
    searchMovies('movie')
  }, []);

  return (
    <div className="app">
      <h1>Movie Engine</h1>

      <div className="search">
        <input
          placeholder='Type here'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyUp={searchTerm.length >= 5 ? () => searchMovies(searchTerm) : ''}
          type="text"
         />
         <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
          />
      </div>

      {movies?.length > 0
        ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie ={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies found</h2>
          </div>
        )}

    </div>
  );
}

export default App;

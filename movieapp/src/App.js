import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
import './App.css';
import { useState } from 'react';


function App() {
  //store the movie data
  const [movies, setMovies] = useState(null); //set null - don't know what data will coming back in API 

  //fetch data from API
  const getMovie = async (searchTerm) => {
    console.log(searchTerm);
    const response = await fetch (`https://www.omdbapi.com/?apikey=388622ef&t=${searchTerm}`);
    const data = await response.json();
    setMovies(data);
    console.log(data);
  } 

  return (
    <div className="App">
      <h1>Movie Information</h1>
      <Form movieSearch={getMovie}/>
      {movies && <MovieDisplay movies={movies}/>}
    </div>
  );
}

export default App;

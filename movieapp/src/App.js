import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
import './App.css';
import { useState, useEffect } from 'react';
import { getMovie } from './services/omdbapi';
import NavBar from "./components/NavBar";



function App() {
  //store the movie data
  const [movies, setMovies] = useState(null); //set null - don't know what data will coming back in API 


  useEffect(()=> {
    const fetchData = async() => {
      const data = await getMovie('Up');
      setMovies(data);
      console.log(data);
    }
    fetchData();

  },[])

  return (
    <div className="App">
      <NavBar />
      <Form movieSearch={getMovie} setMovies={setMovies}/>
      <MovieDisplay movies={movies}/>
    </div>
  );
}

export default App;

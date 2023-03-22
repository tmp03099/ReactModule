import { useEffect, useState } from 'react';


function MovieDisplay({movies}){

    const [showmore, setShowMore] = useState(false);

    useEffect(()=>{
        setShowMore(false);
    },[]);


    const loaded = () => {
        return(
            <div className="movieDisplay">
                <h1 className="py-3 text-white ">{movies.Title}</h1>
                <img src={movies.Poster} alt="img" className="my-3 border-white rounded p-4"/>
                <h5>Year: {movies.Year}</h5>
                <h5>Genre: {movies.Genre}</h5>
                <h5>Actor: {movies.Actors}</h5>
                <h5>Director: {movies.Director}</h5>
                { !showmore  && <p onClick = {() => setShowMore(true)}>show more...</p> }
                {
                    showmore &&
                    <>
                        <h5>Award: {movies.Awards}</h5>
                        <h5>IMDB Rating: {movies.imdbRating}</h5>
                        <h5>Writer: {movies.Writer}</h5>
                        <p>{movies.Plot}</p>
                    </>
                }
            </div>
        )
    }

    const loading = () => <h1>No Movie to Display</h1>
    return movies ? loaded() : loading(); //because we set useState(null) at the begining
}

export default MovieDisplay;
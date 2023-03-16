function MovieDisplay({movies}){
    return(
        <div>
            <h1 className="my-3">{movies.Title}</h1>
            <img src={movies.Poster} alt="img" className="my-3"/>
            <h5>Year: {movies.Year}</h5>
            <h5>Rating: {movies.imdbRating}</h5>
            <h5>Actor: {movies.Actors}</h5>
            <h5>Director: {movies.Director}</h5>
            <p>{movies.Plot}</p>
        </div>
    )
}

export default MovieDisplay;
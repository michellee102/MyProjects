import React, { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

//2cbbcd8a

const API_URL = 'http://www.omdbapi.com?apikey=2cbbcd8a'

const movie1 = {
    "Title": "Spiderman",
    "Year": "1990",
    "imdbID": "tt0100669",
    "Type": "movie",
    "Poster": "N/A"
};

const App = () => {
    //we're setting the default state for movies to be an empty array
    const [movies, setMovies] = useState([]);

    // FETCH MOVIES FROM MOVIES API
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    //useEffect performs side effects -> like componentDidMount, componentDidUpdate and componentWillUnmount combined
    useEffect(
        () => {
            searchMovies('Spiderman');
        }, []
    )

    return (
        <div className="app">
            <h1>Moviefy</h1>

            <div className="search">
                {/* input fields in react need 2 things that are crucial: value and onChange */}
                <input
                    placeholder="Search for movies"
                    value="Superman"
                    onChange={() => { }}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => { }}
                />
            </div>

            {/* check if movies array has movies in it */}
            {
                movies?.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie) =>
                                <MovieCard movie={movie} />
                            )}
                        </div>
                    ) :
                    (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )
            }
        </div>
    );
}

export default App;
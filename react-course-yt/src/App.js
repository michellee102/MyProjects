import React, { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';

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
    const searchMovies = async (title) => {
        //fetch movies
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

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

            <div className="container">
                <div className="movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>

                    <div>
                        <img
                            // add check if an poster for movie is available
                            // API call Poster property 'N/A for movies that dont have a poster'
                            src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'}
                            alt={movie1.Title}
                        />
                    </div>

                    <div>
                        <span>{movie1.Type}</span>
                        <h3>{movie1.Title}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import DefaultImg from '../../src/img/poster.jpg';
import axios from 'axios';
import Card from '../components/Card';

const Favorites = () => {

    const [storedMovies, setStoredMovies] = useState([]);

    useEffect(() => {
        let movieArr = [];
        let moviesId = window.localStorage.movies ? window.localStorage.movies.split(',') : [];
        
        for (let i = 0; i < moviesId.length; i++){
            axios.get(`https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=ed82f4c18f2964e75117c2dc65e2161d`)
            .then((res) => movieArr.push(res.data))
            .then(() => setStoredMovies(movieArr))
        }
    }, [])


    return (
        <div>
            <Nav />
            <div className='card-container'>
                {storedMovies === null ? <h1>Aucun favoris enregistré</h1> : (
                storedMovies.map((movie) => (
                    <Card movie={movie} key={movie.id}/>
                )))}
            </div>
        </div>
    );
};

export default Favorites;
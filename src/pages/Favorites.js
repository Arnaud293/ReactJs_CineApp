import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import DefaultImg from '../../src/img/poster.jpg';
import axios from 'axios';

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
                <div className='card'>
                    {storedMovies.poster_path != null ? 
                    <img src={ 'https://image.tmdb.org/t/p/original/' + storedMovies.poster_path} />
                    :
                    <img src={DefaultImg} />
                    }
                    
                    <h2>{storedMovies.title}</h2>
                    <h5>{storedMovies.release_date}</h5>
                    <h4>{storedMovies.vote_average}/10 <span>star</span></h4>
                    <ul>
                        
                        {/* {storedMovies.genre_ids ? findGenre() : null} */}
                    </ul>
                    <h3>Synopsis</h3>
                    <p>{storedMovies.overview}</p>
                    <div className='btn' onClick={(e) => handleFavorites(e)}>Ajouter aux coups de coeur</div>
                </div>)))}
            </div>
        </div>
    );
};

export default Favorites;
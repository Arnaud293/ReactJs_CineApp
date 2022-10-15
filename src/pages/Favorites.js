import React from 'react';
import Nav from '../components/Nav';
import DefaultImg from '../../src/img/poster.jpg';

const Favorites = () => {

    // récup l'id uniquement + split pour subdiviser en éléments de tableaux
    // Boucle pour parcourir le LS
    // Fetch dans la boucle les data === a l'id 
    // Mapper 
    let storedMovies = [];
    const getStoredMovies = () => {
        storedMovies = JSON.parse(localStorage.getItem('favorite'));
        console.log(storedMovies)
        
    }

    getStoredMovies();

    return (
        <div>
            <Nav />
            {storedMovies === null ? <h1>Aucun favoris enregistré</h1> : (
                // Sinon mapp
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
            </div>)}
        </div>
    );
};

export default Favorites;
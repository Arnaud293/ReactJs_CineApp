import React from 'react';

const Card = ({movie}) => {
    return (
        <div className='card'>
            <img src={'https://image.tmdb.org/t/p/original/' + movie.poster_path} />
            <h2>{movie.title}</h2>
            <h5>{movie.release_date}</h5>
            <h4>{movie.vote_average}/10 <span>star</span></h4>
            <ul>
                {movie.genre_ids.map((genre)=>(
                    <li>{genre}</li>
                ))}
            </ul>
            <h3>Synopsis</h3>
            <p>{movie.overview}</p>
            <div className='btn' >Ajouter aux coups de coeur</div>
        </div>
    );
};

export default Card;
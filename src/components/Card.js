import React from 'react';

const Card = ({movie}) => {
    return (
        <div className='card'>
            <img src={'https://image.tmdb.org/t/p/original/' + movie.poster_path} />
        </div>
    );
};

export default Card;
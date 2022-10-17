import { useEffect } from 'react';
import DefaultImg from '../../src/img/poster.jpg';

const Card = ({movie}) => {

    

    let genreArr = [];
    const findGenre = () => {
        for (let i = 0; i < movie.genre_ids.length; i++){
            switch(movie.genre_ids[i]){
                case 28 :
                    genreArr.push('Action');
                    break;
                case 12 :
                    genreArr.push('Aventure');
                    break;
                case 16 :
                    genreArr.push('Animation');
                    break;
                case 35 :
                    genreArr.push('Comédie');
                    break;
                case 80 : 
                    genreArr.push('Crime');
                    break;
                case 99 :
                    genreArr.push('Documentaire');
                    break;
                case 18 :
                    genreArr.push('Drame');
                    break;
                case 10751 :
                    genreArr.push('Familial');
                    break;
                case 14 : 
                    genreArr.push('Fantastique');
                    break;
                case 36 :
                    genreArr.push('Histoire');
                    break;
                case 27 :
                    genreArr.push('Horreur');
                    break;
                case 10402 :
                    genreArr.push('Musique');
                    break;
                case 9648 :
                    genreArr.push('Mystère');
                    break;
                case 10749 :
                    genreArr.push('Romance');
                    break;
                case 878 :
                    genreArr.push('Science-Fiction');
                    break;
                case 10770 :
                    genreArr.push('Téléfilm');
                    break;
                case 53 :
                    genreArr.push('Thriller');
                    break;
                case 10752 :
                    genreArr.push('Guerre');
                    break;
                case 37 :
                    genreArr.push('Western');
                default :
                    return null;
            }
        }
        return genreArr.map((genre) => <li>{genre}</li>);
    }

    const handleFavorites = (e) =>{
        e.preventDefault();

        let favStore = window.localStorage.movies ? window.localStorage.movies.split(',') : [];

        if(!favStore.includes(movie.id.toString()))
        {
            favStore.push(movie.id);
            window.localStorage.movies = favStore;
            alert(`${movie.title} vient d'être ajouté à vos favoris !`)
        }
    }

    const handleDeleteFavorites = () => {
        let storedData = window.localStorage.movies.split(',');
        let newData = storedData.filter((id) => id != movie.id );
        window.localStorage.movies= newData;

        alert(`${movie.title} vient d'être retiré de vos favoris !`)
        window.location.reload();
    }

    return (
        <div className='card'>
            {movie.poster_path != null ? 
            <img src={ 'https://image.tmdb.org/t/p/original/' + movie.poster_path} />
            :
            <img src={DefaultImg} />
            }
            
            <h2>{movie.title}</h2>
            <h5>{movie.release_date}</h5>
            <h4>{movie.vote_average}/10 <span>star</span></h4>
            <ul>
                
                {movie.genre_ids ? findGenre() : null}
            </ul>
            <h3>Synopsis</h3>
            <p>{movie.overview}</p>
            {!window.localStorage.movies.includes(movie.id) ? (
            <div className='btn' onClick={(e) => handleFavorites(e)}>Ajouter aux coups de coeur</div>)
            : (
            <div className='btn' onClick={(e) => handleDeleteFavorites()}>Retirer coup de coeur</div>
            )}
        </div>
    );
};

export default Card;
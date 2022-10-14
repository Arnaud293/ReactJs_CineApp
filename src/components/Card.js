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
    

    return (
        <div className='card'>
            <img src={'https://image.tmdb.org/t/p/original/' + movie.poster_path} />
            <h2>{movie.title}</h2>
            <h5>{movie.release_date}</h5>
            <h4>{movie.vote_average}/10 <span>star</span></h4>
            <ul>
                
                {movie.genre_ids ? findGenre() : null}
            </ul>
            <h3>Synopsis</h3>
            <p>{movie.overview}</p>
            <div className='btn' >Ajouter aux coups de coeur</div>
        </div>
    );
};

export default Card;
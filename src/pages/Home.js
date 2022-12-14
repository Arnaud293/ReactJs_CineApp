import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Nav from '../components/Nav';

const Home = () => {

    const [getMovies, setGetMovies] = useState([]);
    const [searchMovie, setSearchMovie] = useState('');
    const [sortGoodBad, setSortGoodBad] = useState(null);
   

    const getData = () => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=?${searchMovie}&language=fr-FR`)
        .then((res) => setGetMovies(res.data.results))
        
    }

    useEffect(() => {
        getData();
        
    }, [searchMovie])

    

    return (
        <div>
            <Nav />
            <div className="form-component">
                <div className="form-container">
                    <form action="">
                        <input type="text" placeholder='Write text to search movies' onChange={(e) => setSearchMovie(e.target.value)}/>
                        <input type="submit" value="Rechercher" />
                    </form>
                </div>
                <div className="btn-sort-container">
                    <div id="goodToBad" onClick={() => setSortGoodBad(goodToBad)}>Top <span>➡️</span></div>
                    <div id="badToGood" onClick={() => setSortGoodBad(badToGood)}>Flop<span>➡️</span></div>
                </div>
            </div>
            
            <div className="card-container">
                {
                    getMovies
                    .sort((a,b) => {
                        if(sortGoodBad === goodToBad){
                        return b.vote_average - a.vote_average}
                        if(sortGoodBad === badToGood){
                            return a.vote_average - b.vote_average
                        }
                    })    
                    .map((movie, index) =>(
                        <Card key={index} movie={movie}/>
                        ))
                }
            </div>
        </div>
    );
};

export default Home;
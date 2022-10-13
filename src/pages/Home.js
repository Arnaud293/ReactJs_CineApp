import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Nav from '../components/Nav';

const Home = () => {

    const [getMovies, setGetMovies] = useState([]);
    const [searchMovie, setSearchMovie] = useState('');

    const getData = () => {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=code&language=fr-FR')
        .then((res) => setGetMovies(res.data.results))
        
    }

    useEffect(() => {
        getData()
        
    }, [searchMovie])
    console.log(getMovies)

    return (
        <div>
            <Nav />
            <div className="form-component">
                <div className="form-container">
                    <form action="">
                        <input type="text" onChange={(e) => setSearchMovie(e.target.value)}/>
                        <input type="submit" value="Rechercher" />
                    </form>
                </div>
            </div>
            <div className="card-container">
                {
                    getMovies.map((movie, index) =>(
                        <Card key={index} movie={movie}/>
                        ))
                }
            </div>
        </div>
    );
};

export default Home;
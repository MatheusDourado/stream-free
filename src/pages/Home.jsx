import { useState, useEffect } from "react";

import Footer from '../components/Footer';
import Title from "../components/Title";

const api_key = import.meta.env.VITE_API_KEY
const api_url = import.meta.env.VITE_API_URL
const api_type_movie = import.meta.env.VITE_API_TYPE_MOVIE
const api_img = import.meta.env.VITE_API_IMG


const Home = () => {
    const [topMovies, setTopMovies] = useState([])

    const getTopRatedMovies = async url => {
        const response = await fetch(url)
        const data = await response.json()

        console.log(data)

        setTopMovies(data.results)
    }

    useEffect(() => {
        const topRatedURL = `${api_url}${api_type_movie}/top_rated?${api_key}`

        getTopRatedMovies(topRatedURL)
    }, [])

    return ( 
        <>
            <Title/>
            <section className="section-home"> 
                <span className="overlay"></span>
                {topMovies.map(movie => 
                    <div className="div-home">
                        <img className="img-home" src={api_img + movie.backdrop_path} alt={movie.title}></img>
                    </div>
                )}
            </section> 
            <Footer/>
        </>
    )
}

export default Home; 
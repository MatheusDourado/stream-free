//React
import { useState, useEffect } from "react";

//API
import { api } from "../utils/keys"; 

//Componente
import Footer from '../components/Footer';
import Title from "../components/Title";

const Home = () => {
    const [topMovies, setTopMovies] = useState([])

    const getTopRatedMovies = async url => {
        const response = await fetch(url)
        const data = await response.json()
        setTopMovies(data.results)
    }

    useEffect(() => {
        const topRatedURL = `${api.url}${api.type_movie}/top_rated?${api.key}`
        getTopRatedMovies(topRatedURL)
    }, [])

    return ( 
        <>
            <Title/>
            <section className="section-home"> 
                <span className="overlay"></span>
                {topMovies.map(movie => 
                    <div className="div-home">
                        <img className="img-home" src={api.img + movie.backdrop_path} alt={movie.title}></img>
                    </div>
                )}
            </section> 
            <Footer/>
        </>
    )
}

export default Home; 
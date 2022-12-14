//React
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { FaPlay } from "react-icons/fa"

//API
import { api } from '../utils/keys'

const Movie = () => {
    const [movieSelected, setMovieSelected] = useState({})
    const [directorSelected, setDirectorSelected]  = useState({})
    const {id} = useParams()

    useEffect(() => {
        (async () => {
            const response = await fetch(`${api.url}${api.type_movie}/${id}/credits?${api.key}`)
            const data = await response.json()
            const credits_info = data.crew.filter(item => item.job === 'Director')
            setDirectorSelected(credits_info[0])
        })()
    }, [id])

    useEffect(() => {
        (async () => {
            const response = await fetch(`${api.url}${api.type_movie}/${id}?${api.key}${api.language}`)
            const data = await response.json()
            setMovieSelected(data)
        })()
        
    }, [id]);

    
    const convertTime = (number) => {
        const hour = Math.floor(number / 60)
        const minute = number % 60

        return (hour + 'h' + ' ' + minute + 'm')
    }

    const handleTrailer = async () => {
        const response = await fetch(`${api.url}${api.type_movie}/${id}/videos?${api.key}${api.language}`)
        const data = await response.json()

        window.open(`https://www.youtube.com/watch?v=${data.results[0].key}`, '_blank')
    }

    return (
        <section className="section_datelhes">
            <div className="img_detalhes">
                <img className="img_movie" src={`${api.img}${movieSelected.poster_path}`} alt={movieSelected.title}/>
            </div>
            
            <div className="container_detalhes">
                <div className="header_detalhes">
                    <h2 className="title_detalhes">{movieSelected.title}<span>({movieSelected.release_date?.split('-')[0]})</span></h2>
                    <ul className="list_detalhes">
                        <li className="list_item">
                            <p>{new Date(`${movieSelected.release_date} 23:59:00`).toLocaleDateString('pt-BR')}</p>
                        </li>
                        <li className="list_item">
                            {movieSelected?.genres?.map(item => (
                                <p key={item.id}>{item.name}</p>
                            ))}
                        </li>
                        <li className="list_item">
                            <p>{convertTime(movieSelected.runtime)}</p>
                        </li>
                    </ul>
                </div>

                <div className="main_detalhes">
                    <span className="tagline_detalhes">{movieSelected.tagline}</span>
                    <h3 className="title_sinopse">Sinopse</h3>
                    <p className="overview_detalhes">{movieSelected.overview}</p>
                    <button className="trailer_detalhes" onClick={handleTrailer}><FaPlay/> Trailer </button>

                    <div className="credits_info_detalhes">
                        <h3 className="title_director_detalhes">{directorSelected.name}</h3>
                        <span className="subtitle_director_detalhes">{directorSelected.job}</span>
                    </div>  
                </div>
            </div>
        </section>
    )
}

export default Movie
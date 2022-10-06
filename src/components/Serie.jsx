//React
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { FaPlay } from "react-icons/fa"

//API
import { api } from '../utils/keys'

const Serie = () => {
    const [serieSeleted, setserieSeleted] = useState({})
    const [directorSelected, setDirectorSelected]  = useState({})
    const {id} = useParams()

    useEffect(() => {
        (async () => {
            const response = await fetch(`${api.url}${api.type_serie}/${id}/credits?${api.key}`)
            const data = await response.json()
            const credits_info = data.crew.filter(item => item.job === 'Executive Producer')
            setDirectorSelected(credits_info[0])
        })()
    }, [id])

    useEffect(() => {
        (async () => {
            const response = await fetch(`${api.url}${api.type_serie}/${id}?${api.key}${api.language}`)
            const data = await response.json()
            setserieSeleted(data)
        })()
        
    }, [id]);

    
    const convertTime = (number) => {
        const hour = Math.floor(number / 60)
        const minute = number % 60

        return (hour + 'h' + ' ' + minute + 'm')
    }

    const handleTrailer = async () => {
        const response = await fetch(`${api.url}${api.type_serie}/${id}/videos?${api.key}${api.language}`)
        const data = await response.json()

        window.open(`https://www.youtube.com/watch?v=${data.results[0].key}`, '_blank')
    }

    return (
        <section className="section_datelhes">
            <div className="img_detalhes">
                <img className="img_movie" src={`${api.img}${serieSeleted.poster_path}`} alt={serieSeleted.title}/>
            </div>
            
            <div className="container_detalhes">
                <div className="header_detalhes">
                    <h2 className="title_detalhes">{serieSeleted.original_name}<span>({serieSeleted.first_air_date?.split('-')[0].concat(' - ')}{serieSeleted.last_air_date?.split('-')[0]})</span></h2>
                    <ul className="list_detalhes">
                        <li className="list_item">
                            {serieSeleted?.genres?.map(item => (
                                <p key={item.id}>{item.name}</p>
                            ))}
                        </li>
                    </ul>
                </div>

                <div className="main_detalhes">
                    <span className="tagline_detalhes">{serieSeleted.tagline}</span>
                    <h3 className="title_sinopse">Sinopse</h3>
                    <p className="overview_detalhes">{serieSeleted.overview}</p>
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

export default Serie
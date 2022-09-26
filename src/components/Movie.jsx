import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const api_key = import.meta.env.VITE_API_KEY
const api_url = import.meta.env.VITE_API_URL
const api_type_movie = import.meta.env.VITE_API_TYPE_MOVIE
const api_language = '&language=pt-BR'

const Movie = () => {
    const [movieSelected, setMovieSelected] = useState({})
    
    const {id} = useParams()

    useEffect(() => {
        (async () => {
            const response = await fetch(`${api_url}${api_type_movie}/${id}?${api_key}${api_language}`)
            const data = await response.json()
    
            setMovieSelected(data)
        })()
        
    }, [id]);

    return (
        <>
            <h1>{movieSelected.title}</h1>
        </>
    )

}

export default Movie
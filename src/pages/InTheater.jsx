import React, { useState, useEffect } from "react"

import CardMovie from "../components/CardMovie";


const api_key = import.meta.env.VITE_API_KEY
const api_url = import.meta.env.VITE_API_URL
const api_type_movie = import.meta.env.VITE_API_TYPE_MOVIE
const api_language = '&language=pt-BR'


const InTheater = () => {
    const [state, setstate] = useState([])

    useEffect(() => {
        (async () => {
            const response = await fetch(`${api_url}${api_type_movie}/now_playing?${api_key}${api_language}`)
            const data = await response.json()
    
            setstate(data.results)
        })()

    }, [])
    return (
        <CardMovie title="Em cartaz" movies={state}/>
    )
}

export default InTheater;
//React
import React, { useState, useEffect } from "react"

//Components
import CardMovie from "../components/CardMovie";

//API
import { api } from "../utils/keys";

const PopularMovie = () => {
    const [state, setstate] = useState([])

    useEffect(() => {
        (async () => {
            const response = await fetch(`${api.url}${api.type_movie}/popular?${api.key}${api.language}` )
            const data = await response.json()
    
            setstate(data.results)
        })()
        
    }, [])
    return (
        <CardMovie title="Filmes Populares" movies={state}/>
    )
}

export default PopularMovie;
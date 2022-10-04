//React
import React, { useState, useEffect } from "react"

//Components
import CardMovie from "../components/CardMovie";

//API
import { api } from "../utils/keys";

const TopRatedMovie = () => {
    const [state, setstate] = useState([])

    useEffect(() => {
        (async () => {
            const response = await fetch(`${api.url}${api.type_movie}/top_rated?${api.key}${api.language}`)
            const data = await response.json()
    
            setstate(data.results)
        })()
        
    }, [])
    return (
        <CardMovie title="Mais bem avaliados" movies={state}/>
    )
}

export default TopRatedMovie;
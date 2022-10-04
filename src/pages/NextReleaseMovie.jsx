//React
import React, { useState, useEffect } from "react"

//Components
import CardMovie from "../components/CardMovie";

//API
import { api } from "../utils/keys";

const NextReleaseMovie = () => {
    const [state, setstate] = useState([])

    useEffect(() => {
        (async () => {
            const response = await fetch(`${api.url}${api.type_movie}/upcoming?${api.key}${api.language}`)
            const data = await response.json()
    
            setstate(data.results)
        })()
        
    }, [])
    return (
        <CardMovie title="Proximas estreias" movies={state}/>
    )
}

export default NextReleaseMovie;
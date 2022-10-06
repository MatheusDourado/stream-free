//React
import React, { useState, useEffect } from "react"

//Components
import CardSerie from "../components/CardSerie";

//API
import { api } from "../utils/keys";

const TopRatedSerie = () => {
    const [state, setstate] = useState([])

    useEffect(() => {
        (async () => {
            const response = await fetch(`${api.url}${api.type_serie}/top_rated?${api.key}${api.language}` )
            const data = await response.json()
            
            setstate(data.results)
        })()
        
    }, [])
    return (
        <CardSerie title="Séries mais bem avaliadas" series={state}/>
    )
}

export default TopRatedSerie
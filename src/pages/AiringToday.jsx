//React
import React, { useState, useEffect } from "react"

//Components
import CardSerie from "../components/CardSerie";

//API
import { api } from "../utils/keys";


const AiringToday = () => {
    const [state, setstate] = useState([])

    useEffect(() => {
        (async () => {
            const response = await fetch(`${api.url}${api.type_serie}/airing_today?${api.key}${api.language}` )
            const data = await response.json()
            
            setstate(data.results)
        })()
        
    }, [])
    return (
        <CardSerie title="Séries Em Exibição" series={state}/>
    )
}

export default AiringToday
//React
import React, { useState, useEffect } from "react"

//Components
import CardSerie from "../components/CardSerie";

//API
import { api } from "../utils/keys";

const PopularSerie = () => {
    const [state, setstate] = useState([])

    useEffect(() => {
        (async () => {
            console.log(`${api.url}${api.type_serie}/popular?${api.key}${api.language}`);
            const response = await fetch(`${api.url}${api.type_serie}/popular?${api.key}${api.language}` )
            const data = await response.json()
            
            setstate(data.results)
        })()
        
    }, [])
    return (
        <CardSerie title="Séries Populares" series={state}/>
    )
}

export default PopularSerie;
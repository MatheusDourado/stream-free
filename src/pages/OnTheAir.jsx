//React
import React, { useState, useEffect } from "react"

//Components
import CardSerie from "../components/CardSerie";

//API
import { api } from "../utils/keys";


const OnTheAir = () => {
    const [state, setstate] = useState([])

    useEffect(() => {
        (async () => {
            const response = await fetch(`${api.url}${api.type_serie}/on_the_air?${api.key}${api.language}` )
            const data = await response.json()
            
            setstate(data.results)
        })()
        
    }, [])
    return (
        <CardSerie title="Séries na TV" series={state}/>
    )
}

export default OnTheAir
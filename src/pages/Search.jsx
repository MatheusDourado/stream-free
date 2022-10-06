//React
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

//API
import { api } from'../utils/keys'

//Components
import CardMovie from "../components/CardMovie"

const Search = () => {
    const [searchParams] = useSearchParams()
    const [movies, setMovies] = useState([])
    const query = searchParams.get("q")

    const getSearchMovies = async (url) => {
        const response = await fetch(url)
        const data = await response.json()

        setMovies(data.results)
    }

    useEffect(() => {
        console.log(`${api.url}${api.type_search}?${api.key}&q=${query}`)
        const searchQueryURL = `${api.url}${api.type_search}${api.type_movie}?${api.key}&query=${query}`
        getSearchMovies(searchQueryURL)
    }, [])

    return (
        // <h1>TESTE</h1>
        <CardMovie title={"Resultado da pesquisa: " + query.toUpperCase()} movies={movies}></CardMovie>
    )
}

export default Search;
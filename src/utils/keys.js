const api = {
    key: import.meta.env.VITE_API_KEY,
    url: import.meta.env.VITE_API_URL,
    type_movie: import.meta.env.VITE_API_TYPE_MOVIE,
    type_serie: import.meta.env.VITE_API_TYPE_SERIE, 
    type_search: import.meta.env.VITE_API_TYPE_SEARCH, 
    language: '&language=pt-BR',
    img: import.meta.env.VITE_API_IMG
}

export {api}
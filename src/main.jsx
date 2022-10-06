import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import App from './App'
import Movie from './components/Movie'
import Home from './pages/Home'
import InTheater from './pages/InTheater'
import NextReleaseMovie from './pages/NextReleaseMovie'
import PopularMovie from './pages/PopularMovie'
import TopRatedMovie from './pages/TopRatedMovie'

import Serie from './components/Serie'
import AiringToday from './pages/AiringToday'
import OnTheAir from './pages/OnTheAir'
import TopRatedSerie from './pages/TopRatedSerie'

import Search from './pages/Search'
import PopularSerie from './pages/PopularSerie'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route element={<App/>} >
                {/* MOVIES */}
                <Route path='/' element={<Home/>} />
                <Route path='/movie/populares' element={<PopularMovie/>} />
                <Route path='/movie/em-cartaz' element={<InTheater/>} />
                <Route path='/movie/proximas-estreias' element={<NextReleaseMovie/>} />
                <Route path='/movie/mais-avaliados' element={<TopRatedMovie/>} />
                <Route path='/movie/:id' element={<Movie/>} />
                {/* SERIES */}
                <Route path='/serie/populares' element={<PopularSerie/>} />
                <Route path='/serie/em-exibicao' element={<AiringToday/>} />
                <Route path='/serie/na-tv' element={<OnTheAir/>} />
                <Route path='/serie/mais-avaliados' element={<TopRatedSerie/>} />
                <Route path='/serie/:id' element={<Serie/>} />
                {/* SEATCH */}
                <Route path='/search' element={<Search/>} /> 
            </Route>
        </Routes>
    </BrowserRouter>
)

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

import Search from './pages/Search'
import PopularSerie from './pages/PopularSerie'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route element={<App/>} >
                <Route path='/' element={<Home/>} />
                <Route path='/movie/populares' element={<PopularMovie/>} />
                <Route path='/movie/em-cartaz' element={<InTheater/>} />
                <Route path='/movie/proximas-estreias' element={<NextReleaseMovie/>} />
                <Route path='/movie/mais-avaliados' element={<TopRatedMovie/>} />
                <Route path='/movie/:id' element={<Movie/>} />
                <Route path='/serie/populares' element={<PopularSerie/>} />
                {/* <Route path='/serie/em-exibicao' element={<Movie/>} />
                <Route path='/serie/na-tv' element={<Movie/>} />
                <Route path='/serie/mais-avaliados' element={<Movie/>} />
                <Route path='/serie/:id' element={<Movie/>} />
                <Route path='/search' element={<Search/>} /> */}
            </Route>
        </Routes>
    </BrowserRouter>
)

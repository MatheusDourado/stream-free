import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import App from './App'
import Home from './pages/Home'
import Movie from './pages/Movie'
import Search from './pages/Search'


// CSS Style
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<App/>} >
                    <Route path='/' element={<Home/>} />
                    <Route path='/movie/:id' element={<Movie/>} />
                    <Route path='/movie/populares' element={<Movie/>} />
                    <Route path='/movie/em-cartaz' element={<Movie/>} />
                    <Route path='/movie/proximas-estreias' element={<Movie/>} />
                    <Route path='/movie/mais-avaliados' element={<Movie/>} />
                    <Route path='/serie/:id' element={<Movie/>} />
                    <Route path='/serie/populares' element={<Movie/>} />
                    <Route path='/serie/em-exibicao' element={<Movie/>} />
                    <Route path='/serie/na-tv' element={<Movie/>} />
                    <Route path='/serie/mais-avaliados' element={<Movie/>} />
                    <Route path='/search' element={<Search/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)

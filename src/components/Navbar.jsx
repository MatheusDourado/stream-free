//React
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { FaSearch } from "react-icons/fa"


const Navbar = () => {
    const [search, setSearch] = useState("")
    const  navigate = useNavigate()
    const handleSubmit = e => {
        e.preventDefault()
        console.log(search)

        if(!search) {
            return 
        }

        navigate(`/search?q=${search}`)
        setSearch("")
    }

    return (
        <nav className="navbar-custom">
            <Link className="navbar-custom-logo" to="/" >
                <img src="/src/assets/img/logo.svg" alt="Logo" />
            </Link>
            <ul>
                <li>
                    <Link className="nav-link-custom" aria-current="page" to="/">Home</Link>
                </li>
                <li className="movies">
                    <p className="nav-link-custom">Filmes</p>

                    <div className="dropdown-movies">
                        <ul className="dropdown-ul">
                            <li className="dropdown-li"><Link className="dropdown-link" to="/movie/populares" >Populares</Link></li>
                            <li className="dropdown-li"><Link className="dropdown-link" to="/movie/em-cartaz">Em cartaz</Link></li>
                            <li className="dropdown-li"><Link className="dropdown-link" to="/movie/proximas-estreias">Próximas Estreias</Link></li>
                            <li className="dropdown-li"><Link className="dropdown-link" to="/movie/mais-avaliados">Mais bem avaliados</Link></li>
                        </ul>
                    </div>
                </li>

                <li className="series">
                    <p className="nav-link-custom" >Séries</p>

                    <div className="dropdown-series">
                        <ul className="dropdown-ul">
                            <li className="dropdown-li"><Link className="dropdown-link" to="/serie/populares">Populares</Link></li>
                            <li className="dropdown-li"><Link className="dropdown-link" to="/serie/em-exibicao">Em exibição hoje</Link></li>
                            <li className="dropdown-li"><Link className="dropdown-link" to="/serie/na-tv">Na TV</Link></li>
                            <li className="dropdown-li"><Link className="dropdown-link" to="/serie/mais-avaliados">Mais bem avaliados</Link></li>
                        </ul>
                    </div>
                </li>
            </ul>
            <form className="nav-search" onSubmit={handleSubmit}>
                <input type="search" placeholder="Buscar" aria-label="Buscar" onChange={e => setSearch(e.target.value)} value={search}/>
                <button className="nav-submit" type="submit"><FaSearch/></button>
            </form>
        </nav>
    )
}

export default Navbar
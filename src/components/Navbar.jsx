import { Link } from "react-router-dom"
import { FaSearch } from "react-icons/fa"


const Navbar = () => {
    return (
        <nav className="navbar-custom">
            <Link className="navbar-custom-logo" to="/" >
                <img src="src/assets/img/logo.svg" alt="Logo" />
            </Link>
            <ul>
                <li>
                    <Link className="nav-link-custom" aria-current="page" to="/">Home</Link>
                </li>
                <li className="movies">
                    <Link className="nav-link-custom" to="/movie/:id">Filmes</Link>

                    <div className="dropdown-movies">
                        <ul>
                            <li>Populares</li>
                            <li>Em cartaz</li>
                            <li>Próximas Estreias</li>
                            <li>Mais bem avaliados</li>
                        </ul>
                    </div>
                </li>

                <li className="series">
                    <Link className="nav-link-custom" to="/search">Séries</Link>

                    <div className="dropdown-series">
                        <ul>
                            <li>Populares</li>
                            <li>Em exibição hoje</li>
                            <li>Na TV</li>
                            <li>Mais bem avaliados</li>
                        </ul>
                    </div>
                </li>
            </ul>
            <div className="nav-search">
                <input type="search" placeholder="Buscar" aria-label="Buscar"/>
                <button className="nav-submit" type="submit"><FaSearch/></button>
            </div>
        </nav>
    )
}

export default Navbar
import { Link } from "react-router-dom"
import { FaSearch } from "react-icons/fa"


const Navbar = () => {

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
                        <ul>
                            <li><Link to="/movie/populares" >Populares</Link></li>
                            <li><Link to="/movie/em-cartaz">Em cartaz</Link></li>
                            <li><Link to="/movie/proximas-estreias">Próximas Estreias</Link></li>
                            <li><Link to="/movie/mais-avaliados">Mais bem avaliados</Link></li>
                        </ul>
                    </div>
                </li>

                <li className="series">
                    <p className="nav-link-custom" >Séries</p>

                    <div className="dropdown-series">
                        <ul>
                            <li><Link to="/serie/populares">Populares</Link></li>
                            <li><Link to="/serie/em-exibicao">Em exibição hoje</Link></li>
                            <li><Link to="/serie/na-tv">Na TV</Link></li>
                            <li><Link to="/serie/mais-avaliados">Mais bem avaliados</Link></li>
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